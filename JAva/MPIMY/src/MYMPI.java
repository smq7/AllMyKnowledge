
import mpi.*;
/**
 * Compile: javac -cp $MPJ_HOME/lib/mpj.jar:. ObjSend.java 
 * Execute: mpjrun.sh -np 2 -dport 11000 ObjSend
 */
public class MYMPI {
    public static void main(String[] args) throws Exception {
        int peer ; 
        MPI.Init(args);
        int rank = MPI.COMM_WORLD.Rank() ;
        int size = MPI.COMM_WORLD.Size() ; 
        int tag = 100 ; 
        if(rank == 0) {
            String [] smsg = new String[1] ; 
            smsg[0] = "Hi from proc 0" ; 
            peer = 1 ; 
            MPI.COMM_WORLD.Send(smsg, 0, smsg.length, MPI.OBJECT, 
                                                        peer, tag);
            System.out.println("proc <"+rank+"> sent a msg to "+
                               "proc <"+peer+">") ; 
        } else if(rank == 1) {
            String[] rmsg = new String[1] ; 
            peer = 0 ; 
            MPI.COMM_WORLD.Recv(rmsg, 0, rmsg.length , MPI.OBJECT, 
                                                         peer, tag);
            System.out.println("proc <"+rank+"> received a msg from "+
                               "proc <"+peer+">") ; 
            System.out.println("proc <"+rank+"> received the following "+
                               "message: \""+rmsg[0]+"\"") ; 
        } 
        MPI.Finalize();
    }   
}
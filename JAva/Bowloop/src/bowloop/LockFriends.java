package bowloop;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockFriends {
    static class Friend {
        private String name;
        private Lock lock = new ReentrantLock();

        public Friend(String name) {     this.name = name;      }
        public String getName() {     return name;     }

        public boolean impendingBow(Friend bower) {
            Boolean myLock = false;
            Boolean yourLock = false;
            try {
                myLock = lock.tryLock(); //true if lock was acquired
                yourLock = bower.lock.tryLock(); //true if lock was acquired
            } finally {
                if (!(myLock && yourLock)) {
                    if (myLock) {
                        lock.unlock(); // release this lock
                    }
                    if (yourLock) {
                        bower.lock.unlock();
                    }
                }
            }
            return myLock && yourLock;
        }
        public void bow(Friend bower) {
            if (impendingBow(bower)) {
                try { System.out.format("%s: %s" + " has bowed to me!%n", 
						this.name, bower.getName());
                    bower.bowBack(this);
                } finally {
                    lock.unlock();
                    bower.lock.unlock();
                }
            } else {
                System.out.format("%s: %s started to bow to me, but saw that I was already bowing to him.%n",
						this.name, bower.getName());
            }
        }

        public void bowBack(Friend bower) {
            System.out.format("%s: %s" + " has bowed back to me!%n", 
						this.name, bower.getName());
        }
    }
 }

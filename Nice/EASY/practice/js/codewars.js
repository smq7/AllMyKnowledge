let ask = (q,y,n) => {
    if(confirm(q)) y();
    else n();
}
ask(q,y,n)
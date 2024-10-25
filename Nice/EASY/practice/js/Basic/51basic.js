const conv = (num) => {
        let h = Math.floor(num / 60);
        let m = num % 60;
        console.log(`godin ${h}, minyte ${m}`);
}

conv(125);
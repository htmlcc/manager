class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    running(){
        console.log(this.name+'会跑步')
    }
};
let tiger = new('老虎','又黑又黄');
tiger.running();

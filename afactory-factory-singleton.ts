//factory: abstract class that gets extended
//abstract factory: interface that gets implemented

//factory
abstract class EffectMaker {
    public abstract SFX(): Effect;
    public AddSFX(x: boolean): void {
        if (x) {
            const effect = this.SFX();
            console.log("CF: Effect created!", effect.addEffect());
        }
        else console.log("CF: We were ready to work, but the client wanted no effects");
    }
}

class GlitterMaker extends EffectMaker {
    public SFX(): Effect {
        return new Glitter();
    }
}

class GlowMaker extends EffectMaker {
    public SFX(): Effect {
        return new Glow();
    }
}

interface Effect {
    addEffect(): string;
}


class Glitter implements Effect {
    public addEffect(): string {
        return 'Added glitter';
    }
}

class Glow implements Effect {
    public addEffect(): string {
        return 'Added glow';
    }
}

//abstract factory
interface AbstractFactory {
    createTriangle(): Triangle;
    createCircle(): Circle;
}

//concrete factory - red
class RedFactory implements AbstractFactory {
    private constructor() {};

    public createTriangle(): Triangle {
        return new RedTriangle();
    }

    public createCircle(): Circle {
        return new RedCircle();
    }

    private static instance: RedFactory;

    public static getInstance(): RedFactory {
        if (!RedFactory.instance) {
            RedFactory.instance = new RedFactory();
        }
        return RedFactory.instance;
    }
}

//concrete factory - white
class WhiteFactory implements AbstractFactory {
    private constructor() {};

    public createTriangle(): Triangle {
        return new WhiteTriangle();
    }

    public createCircle(): Circle {
        return new WhiteCircle();
    }

    private static instance: WhiteFactory;

    public static getInstance(): WhiteFactory {
        if (!WhiteFactory.instance) {
            WhiteFactory.instance = new WhiteFactory();
        }
        return WhiteFactory.instance;
    }
}

//abstract interfaces
interface Triangle {
    triangleFunction(): string;
}
interface Circle {
    circleFunction(): string;
}

//concrete implementations
class RedTriangle implements Triangle {
    public triangleFunction(): string {
        return 'Made a red triangle';
    }
}

class WhiteTriangle implements Triangle {
    public triangleFunction(): string {
        return 'Made a white triangle';
    }
}

class RedCircle implements Circle {
    public circleFunction(): string {
        return 'Made a red circle';
    }
}

class WhiteCircle implements Circle {
    public circleFunction(): string {
        return 'Made a white circle';
    }
}

function client(af: AbstractFactory, cf: EffectMaker, sfx: boolean) {
    const myTriangle = af.createTriangle();
    const myCircle = af.createCircle();
    
    console.log(myTriangle.triangleFunction());
    console.log(myCircle.circleFunction());

    cf.AddSFX(sfx);
}

console.log('Testing red factory with glitter');
client(RedFactory.getInstance(), new GlitterMaker, true);
console.log();

console.log('Testing white factory with glow');
client(WhiteFactory.getInstance(), new GlowMaker, true);
console.log();

console.log('Testing white factory with no effects');
client(WhiteFactory.getInstance(), new GlowMaker, false);
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

function clientCodeA(factory: AbstractFactory) {
    const productA = factory.createTriangle();
    const productB = factory.createCircle();

    console.log(productA.triangleFunction());
    console.log(productB.circleFunction());

    //client's code can work with conctrete classes
    console.log('Client: Testing client code with the first factory type...');
    clientCodeA(RedFactory.getInstance());

    console.log('Client: Testing the same client code with the second factory type...');
    clientCodeA(WhiteFactory.getInstance());

}
//prototype 
class CarPrototype {
    public Frame: string;
    public Mobility: string;
    public Engine: string;

    public clone(): this {
        const clone = Object.create(this);
        return clone;
    }
}

//builder
//interface announces methods for building certain parts
interface VehicleBuilder {
    addFrame(frame): void;
    addMobility(mobility): void;
    installEngine(engine): void;
}

//concrete builder 1
class CarBuilder implements VehicleBuilder {
    private product: Car;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Car();
    }

    public addFrame(frame): void {
        this.product.parts.push(frame);
    }

    public addMobility(mobility): void {
        this.product.parts.push(mobility);
    }

    public installEngine(engine): void {
        this.product.parts.push(engine);
    }

    public getProduct(): Car {
        const result = this.product;
        //this.reset();
        return result;
    }
}

class Car {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }

    public tellPart(i): string {
        return this.parts[i];
    }
}

function clientCodeB() {
    const builder = new CarBuilder();

    console.log('Let us build');
    builder.addFrame('red');
    builder.addMobility('four wheels');
    builder.installEngine('A370');
    builder.getProduct().listParts();

    const proto = new CarPrototype();
    proto.Frame = builder.getProduct().tellPart(0);
    proto.Mobility = builder.getProduct().tellPart(1);
    proto.Engine = builder.getProduct().tellPart(2);

    console.log('A look at the proto: ', proto.Frame, ' ', proto.Mobility, ' ', proto.Engine);

    const proto2 = proto.clone();
    if (proto.Frame === proto2.Frame) {
        console.log('Primitive field values clone just fine');
    } else {
        console.log('Primitive field values don\'t clone');
    }
}

clientCodeB();
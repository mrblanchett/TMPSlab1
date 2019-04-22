# TMPS

## Lab №1
 - Abstract Factory, Factory and Singleton patterns are implemented in 'afactory-factory-singleton.ts'
 - Builder and Prototype patterns are implemented in 'builder-prototype.ts'

### **Abstract Factory Pattern**
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
        
```
interface AbstractFactory {
    createTriangle(): Triangle;
    createCircle(): Circle;
}

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
```

### Factory Pattern
Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

```
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
```

### Singleton Pattern
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

```
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
```

### Builder Pattern
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

```
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
```

### Prototype Pattern
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

```
class CarPrototype {
    public Frame: string;
    public Mobility: string;
    public Engine: string;

    public clone(): this {
        const clone = Object.create(this);
        return clone;
    }
}
```

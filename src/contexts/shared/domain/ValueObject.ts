import { isEqual } from 'underscore';

interface ValueObjectProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
    public readonly props: T;

    constructor(props: T) {
        this.props = Object.freeze(props);
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) return false;

        if (vo.props === undefined) return false;

        return isEqual(this.props, vo.props);
    }
}
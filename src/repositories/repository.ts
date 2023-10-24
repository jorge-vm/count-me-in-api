export interface Repository<T> {
    get(id: string): Promise<T | undefined>;
    getAll(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T | undefined>;
    delete(id: string): Promise<boolean>;
  }
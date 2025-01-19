export default class StorageService {
  static set(key: string, value: unknown): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  static get(key: string): unknown {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  static update(key: string, value: unknown): boolean {
    try {
      if (localStorage.getItem(key) !== null) {
        this.set(key, value);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating localStorage:', error);
      return false;
    }
  }

  static delete(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error deleting from localStorage:', error);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}

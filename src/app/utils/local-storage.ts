import { CryptoUtil } from './crypto-tools'; // Adjusted the import path to the correct location
export class LocalStorageUtil {
  /**
   * Sets an item in localStorage with encryption.
   * @param key The key to store the value under.
   * @param value The value to store.
   */
  static setItem(key: string, value: any): void {
    try {
      const encryptedValue = CryptoUtil.encrypt(value);
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error setting item in localStorage:', error);
    }
  }

  /**
   * Gets an item from localStorage after decrypting it.
   * @param key The key of the item to retrieve.
   * @returns The decrypted value, or null if not found or decryption fails.
   */
  static getItem<T>(key: string): T | null {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) {
        return null;
      }
      return CryptoUtil.decryptOject<T>(encryptedValue);
    } catch (error) {
      console.error('Error getting item from localStorage:', error);
      return null;
    }
  }

  /**
   * Removes an item from localStorage.
   * @param key The key of the item to remove.
   */
  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  }

  /**
   * Checks if a key exists in localStorage.
   * @param key The key to check.
   * @returns True if the key exists, false otherwise.
   */
  static hasKey(key: string): boolean {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error('Error checking key in localStorage:', error);
      return false;
    }
  }

  /**
   * Tries to get an item from localStorage without throwing errors.
   * @param key The key of the item to retrieve.
   * @returns The decrypted value, or null if not found or an error occurs.
   */
  static tryGet<T>(key: string): T | null {
    try {
      return this.getItem<T>(key);
    } catch {
      return null;
    }
  }
}
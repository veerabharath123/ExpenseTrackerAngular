import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment'; // Adjust the import path as necessary

export class CryptoUtil {
  private static readonly SECRET_KEY = environment.encryptionKey; // Replace with a secure key

  /**
   * Encrypts a value using AES encryption.
   * @param value The value to encrypt.
   * @returns The encrypted string.
   */
  static encrypt(value: any): string {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(value), this.SECRET_KEY).toString();
    } catch (error) {
      console.error('Error encrypting value:', error);
      throw error;
    }
  }

  /**
   * Decrypts an encrypted string using AES decryption.
   * @param encryptedValue The encrypted string.
   * @returns The decrypted value.
   */
  static decryptOject<T>(encryptedValue: string): T {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, this.SECRET_KEY);
      const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue) as T;
    } catch (error) {
      console.error('Error decrypting value:', error);
      throw error;
    }
  }
  static decryptJson(encryptedValue: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, this.SECRET_KEY);
      const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue);
    } catch (error) {
      console.error('Error decrypting value:', error);
      throw error;
    }
  }
}
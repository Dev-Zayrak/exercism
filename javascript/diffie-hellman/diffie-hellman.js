//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {

    if(p <= 0  || p >= 9999 || g <= 0  || g >= 9999){
      throw new Error('constructor arguments are out of range');
    }

    if(!this.isPrime(p) || !this.isPrime(g)){
      throw new Error('constructor arguments are not prime');
    }

    this.p = p;
    this.g = g;
  }

  isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
  }

  getPublicKey(privateKey) {
    if(privateKey <= 1 || privateKey >= this.p){
      throw new Error('private key is invalid')
    }
    return this.g ** privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p
  }
}

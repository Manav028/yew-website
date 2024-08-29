export async function encryptString(email: string, plainText: string): Promise<string> {
    // Convert email (used as a key) to bytes
    const keyBytes = new TextEncoder().encode(email);

    // Hash the key bytes using SHA-256
    const keyHash = await crypto.subtle.digest('SHA-256', keyBytes);

    // Import the key for AES-CBC encryption
    const key = await crypto.subtle.importKey(
        'raw',
        keyHash,
        { name: 'AES-CBC', length: 256 },
        false,
        ['encrypt']
    );

    // Create a 16-byte IV initialized to all zeros
    const iv = new Uint8Array(16); // 16-byte IV filled with zeros

    // Encrypt the plaintext
    const encryptedContent = await crypto.subtle.encrypt(
        { name: 'AES-CBC', iv: iv },
        key,
        new TextEncoder().encode(plainText)
    );

    // Convert encrypted content to base64
    const encryptedBase64 = arrayBufferToBase64(encryptedContent);

    return encryptedBase64;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

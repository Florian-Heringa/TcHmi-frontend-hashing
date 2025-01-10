// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiHashing;
        (function (TcHmiHashing) {
            function getPasswordHash(ctx, password) {
                console.log(password);
                console.log(ctx);
                const utf8 = new TextEncoder().encode(password);
                return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hashHex = hashArray
                        .map((bytes) => bytes.toString(16).padStart(2, '0'))
                        .join('');
                    ctx.success(hashHex);
                });
            }
            TcHmiHashing.getPasswordHash = getPasswordHash;
        })(TcHmiHashing = Functions.TcHmiHashing || (Functions.TcHmiHashing = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('getPasswordHash', 'TcHmi.Functions.TcHmiHashing', TcHmi.Functions.TcHmiHashing.getPasswordHash);

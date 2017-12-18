function AtomVertexAssoc(a, b) {
    this._structure = a, this._assocs = [], this._callBeginEnd = b
}

function TraceVertexAssoc(a, b, c) {
    this._structure = a, this._assocs = [], this._callBeginEnd = c, this._interpolation = b || 1, this._perResidueColors = {}
}

function BackboneTrace() {
    this._trace = []
}

function TraceSubset(a, b, c, d) {
        this._fullTrace = a, this._fullTraceBegin = b, this._fullTraceEnd = c, this._trace = d, this._isNTerminal = 0 === this._fullTraceBegin, this._isCTerminal = this._fullTrace.length() === this._fullTraceEnd;
        var e = this._fullTraceEnd - this._fullTraceBegin;
        this._isCTerminal || ++e, this._isNTerminal || (++e, this._fullTraceBegin -= 1), this._length = e
    }! function(a) {
        "use strict";
        var b = {};
        "undefined" == typeof exports ? "function" == typeof define && "object" == typeof define.amd && define.amd ? (b.exports = {}, define(function() {
                return b.exports
            })) : b.exports = "undefined" != typeof window ? window : a : b.exports = exports,
            function(a) {
                if (!b) var b = 1e-6;
                if (!c) var c = "undefined" != typeof Float32Array ? Float32Array : Array;
                if (!d) var d = Math.random;
                var e = {};
                e.setMatrixArrayType = function(a) {
                    c = a
                }, "undefined" != typeof a && (a.glMatrix = e);
                var f = {};
                f.create = function() {
                    var a = new c(3);
                    return a[0] = 0, a[1] = 0, a[2] = 0, a
                }, f.clone = function(a) {
                    var b = new c(3);
                    return b[0] = a[0], b[1] = a[1], b[2] = a[2], b
                }, f.fromValues = function(a, b, d) {
                    var e = new c(3);
                    return e[0] = a, e[1] = b, e[2] = d, e
                }, f.copy = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a
                }, f.set = function(a, b, c, d) {
                    return a[0] = b, a[1] = c, a[2] = d, a
                }, f.add = function(a, b, c) {
                    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a
                }, f.subtract = function(a, b, c) {
                    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a
                }, f.sub = f.subtract, f.multiply = function(a, b, c) {
                    return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a
                }, f.mul = f.multiply, f.divide = function(a, b, c) {
                    return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a
                }, f.div = f.divide, f.min = function(a, b, c) {
                    return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), a
                }, f.max = function(a, b, c) {
                    return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), a
                }, f.scale = function(a, b, c) {
                    return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a
                }, f.scaleAndAdd = function(a, b, c, d) {
                    return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a[2] = b[2] + c[2] * d, a
                }, f.distance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1],
                        e = b[2] - a[2];
                    return Math.sqrt(c * c + d * d + e * e)
                }, f.dist = f.distance, f.squaredDistance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1],
                        e = b[2] - a[2];
                    return c * c + d * d + e * e
                }, f.sqrDist = f.squaredDistance, f.length = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    return Math.sqrt(b * b + c * c + d * d)
                }, f.len = f.length, f.squaredLength = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    return b * b + c * c + d * d
                }, f.sqrLen = f.squaredLength, f.negate = function(a, b) {
                    return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a
                }, f.normalize = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = c * c + d * d + e * e;
                    return f > 0 && (f = 1 / Math.sqrt(f), a[0] = b[0] * f, a[1] = b[1] * f, a[2] = b[2] * f), a
                }, f.dot = function(a, b) {
                    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
                }, f.cross = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = c[0],
                        h = c[1],
                        i = c[2];
                    return a[0] = e * i - f * h, a[1] = f * g - d * i, a[2] = d * h - e * g, a
                }, f.lerp = function(a, b, c, d) {
                    var e = b[0],
                        f = b[1],
                        g = b[2];
                    return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), a
                }, f.random = function(a, b) {
                    b = b || 1;
                    var c = 2 * d() * Math.PI,
                        e = 2 * d() - 1,
                        f = Math.sqrt(1 - e * e) * b;
                    return a[0] = Math.cos(c) * f, a[1] = Math.sin(c) * f, a[2] = e * b, a
                }, f.transformMat4 = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2];
                    return a[0] = c[0] * d + c[4] * e + c[8] * f + c[12], a[1] = c[1] * d + c[5] * e + c[9] * f + c[13], a[2] = c[2] * d + c[6] * e + c[10] * f + c[14], a
                }, f.transformMat3 = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2];
                    return a[0] = d * c[0] + e * c[3] + f * c[6], a[1] = d * c[1] + e * c[4] + f * c[7], a[2] = d * c[2] + e * c[5] + f * c[8], a
                }, f.transformQuat = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = c[0],
                        h = c[1],
                        i = c[2],
                        j = c[3],
                        k = j * d + h * f - i * e,
                        l = j * e + i * d - g * f,
                        m = j * f + g * e - h * d,
                        n = -g * d - h * e - i * f;
                    return a[0] = k * j + n * -g + l * -i - m * -h, a[1] = l * j + n * -h + m * -g - k * -i, a[2] = m * j + n * -i + k * -h - l * -g, a
                }, f.forEach = function() {
                    var a = f.create();
                    return function(b, c, d, e, f, g) {
                        var h, i;
                        for (c || (c = 3), d || (d = 0), i = e ? Math.min(e * c + d, b.length) : b.length, h = d; i > h; h += c) a[0] = b[h], a[1] = b[h + 1], a[2] = b[h + 2], f(a, a, g), b[h] = a[0], b[h + 1] = a[1], b[h + 2] = a[2];
                        return b
                    }
                }(), f.str = function(a) {
                    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")"
                }, "undefined" != typeof a && (a.vec3 = f);
                var g = {};
                g.create = function() {
                    var a = new c(4);
                    return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a
                }, g.clone = function(a) {
                    var b = new c(4);
                    return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b
                }, g.fromValues = function(a, b, d, e) {
                    var f = new c(4);
                    return f[0] = a, f[1] = b, f[2] = d, f[3] = e, f
                }, g.copy = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a
                }, g.set = function(a, b, c, d, e) {
                    return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a
                }, g.add = function(a, b, c) {
                    return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a[3] = b[3] + c[3], a
                }, g.subtract = function(a, b, c) {
                    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a[3] = b[3] - c[3], a
                }, g.sub = g.subtract, g.multiply = function(a, b, c) {
                    return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a[3] = b[3] * c[3], a
                }, g.mul = g.multiply, g.divide = function(a, b, c) {
                    return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a[3] = b[3] / c[3], a
                }, g.div = g.divide, g.min = function(a, b, c) {
                    return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), a[3] = Math.min(b[3], c[3]), a
                }, g.max = function(a, b, c) {
                    return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), a[3] = Math.max(b[3], c[3]), a
                }, g.scale = function(a, b, c) {
                    return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a[3] = b[3] * c, a
                }, g.scaleAndAdd = function(a, b, c, d) {
                    return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a[2] = b[2] + c[2] * d, a[3] = b[3] + c[3] * d, a
                }, g.distance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1],
                        e = b[2] - a[2],
                        f = b[3] - a[3];
                    return Math.sqrt(c * c + d * d + e * e + f * f)
                }, g.dist = g.distance, g.squaredDistance = function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1],
                        e = b[2] - a[2],
                        f = b[3] - a[3];
                    return c * c + d * d + e * e + f * f
                }, g.sqrDist = g.squaredDistance, g.length = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2],
                        e = a[3];
                    return Math.sqrt(b * b + c * c + d * d + e * e)
                }, g.len = g.length, g.squaredLength = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2],
                        e = a[3];
                    return b * b + c * c + d * d + e * e
                }, g.sqrLen = g.squaredLength, g.negate = function(a, b) {
                    return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = -b[3], a
                }, g.normalize = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = c * c + d * d + e * e + f * f;
                    return g > 0 && (g = 1 / Math.sqrt(g), a[0] = b[0] * g, a[1] = b[1] * g, a[2] = b[2] * g, a[3] = b[3] * g), a
                }, g.dot = function(a, b) {
                    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
                }, g.lerp = function(a, b, c, d) {
                    var e = b[0],
                        f = b[1],
                        g = b[2],
                        h = b[3];
                    return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), a[3] = h + d * (c[3] - h), a
                }, g.random = function(a, b) {
                    return b = b || 1, a[0] = d(), a[1] = d(), a[2] = d(), a[3] = d(), g.normalize(a, a), g.scale(a, a, b), a
                }, g.transformMat4 = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3];
                    return a[0] = c[0] * d + c[4] * e + c[8] * f + c[12] * g, a[1] = c[1] * d + c[5] * e + c[9] * f + c[13] * g, a[2] = c[2] * d + c[6] * e + c[10] * f + c[14] * g, a[3] = c[3] * d + c[7] * e + c[11] * f + c[15] * g, a
                }, g.transformQuat = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = c[0],
                        h = c[1],
                        i = c[2],
                        j = c[3],
                        k = j * d + h * f - i * e,
                        l = j * e + i * d - g * f,
                        m = j * f + g * e - h * d,
                        n = -g * d - h * e - i * f;
                    return a[0] = k * j + n * -g + l * -i - m * -h, a[1] = l * j + n * -h + m * -g - k * -i, a[2] = m * j + n * -i + k * -h - l * -g, a
                }, g.forEach = function() {
                    var a = g.create();
                    return function(b, c, d, e, f, g) {
                        var h, i;
                        for (c || (c = 4), d || (d = 0), i = e ? Math.min(e * c + d, b.length) : b.length, h = d; i > h; h += c) a[0] = b[h], a[1] = b[h + 1], a[2] = b[h + 2], a[3] = b[h + 3], f(a, a, g), b[h] = a[0], b[h + 1] = a[1], b[h + 2] = a[2], b[h + 3] = a[3];
                        return b
                    }
                }(), g.str = function(a) {
                    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
                }, "undefined" != typeof a && (a.vec4 = g);
                var h = {};
                h.create = function() {
                    var a = new c(9);
                    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
                }, h.fromMat4 = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[4], a[4] = b[5], a[5] = b[6], a[6] = b[8], a[7] = b[9], a[8] = b[10], a
                }, h.clone = function(a) {
                    var b = new c(9);
                    return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b
                }, h.copy = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a
                }, h.identity = function(a) {
                    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
                }, h.transpose = function(a, b) {
                    if (a === b) {
                        var c = b[1],
                            d = b[2],
                            e = b[5];
                        a[1] = b[3], a[2] = b[6], a[3] = c, a[5] = b[7], a[6] = d, a[7] = e
                    } else a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4], a[5] = b[7], a[6] = b[2], a[7] = b[5], a[8] = b[8];
                    return a
                }, h.invert = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = b[4],
                        h = b[5],
                        i = b[6],
                        j = b[7],
                        k = b[8],
                        l = k * g - h * j,
                        m = -k * f + h * i,
                        n = j * f - g * i,
                        o = c * l + d * m + e * n;
                    return o ? (o = 1 / o, a[0] = l * o, a[1] = (-k * d + e * j) * o, a[2] = (h * d - e * g) * o, a[3] = m * o, a[4] = (k * c - e * i) * o, a[5] = (-h * c + e * f) * o, a[6] = n * o, a[7] = (-j * c + d * i) * o, a[8] = (g * c - d * f) * o, a) : null
                }, h.adjoint = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = b[4],
                        h = b[5],
                        i = b[6],
                        j = b[7],
                        k = b[8];
                    return a[0] = g * k - h * j, a[1] = e * j - d * k, a[2] = d * h - e * g, a[3] = h * i - f * k, a[4] = c * k - e * i, a[5] = e * f - c * h, a[6] = f * j - g * i, a[7] = d * i - c * j, a[8] = c * g - d * f, a
                }, h.determinant = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2],
                        e = a[3],
                        f = a[4],
                        g = a[5],
                        h = a[6],
                        i = a[7],
                        j = a[8];
                    return b * (j * f - g * i) + c * (-j * e + g * h) + d * (i * e - f * h)
                }, h.multiply = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = b[4],
                        i = b[5],
                        j = b[6],
                        k = b[7],
                        l = b[8],
                        m = c[0],
                        n = c[1],
                        o = c[2],
                        p = c[3],
                        q = c[4],
                        r = c[5],
                        s = c[6],
                        t = c[7],
                        u = c[8];
                    return a[0] = m * d + n * g + o * j, a[1] = m * e + n * h + o * k, a[2] = m * f + n * i + o * l, a[3] = p * d + q * g + r * j, a[4] = p * e + q * h + r * k, a[5] = p * f + q * i + r * l, a[6] = s * d + t * g + u * j, a[7] = s * e + t * h + u * k, a[8] = s * f + t * i + u * l, a
                }, h.mul = h.multiply, h.translate = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = b[4],
                        i = b[5],
                        j = b[6],
                        k = b[7],
                        l = b[8],
                        m = c[0],
                        n = c[1];
                    return a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = h, a[5] = i, a[6] = m * d + n * g + j, a[7] = m * e + n * h + k, a[8] = m * f + n * i + l, a
                }, h.rotate = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = b[4],
                        i = b[5],
                        j = b[6],
                        k = b[7],
                        l = b[8],
                        m = Math.sin(c),
                        n = Math.cos(c);
                    return a[0] = n * d + m * g, a[1] = n * e + m * h, a[2] = n * f + m * i, a[3] = n * g - m * d, a[4] = n * h - m * e, a[5] = n * i - m * f, a[6] = j, a[7] = k, a[8] = l, a
                }, h.fromQuat = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = c + c,
                        h = d + d,
                        i = e + e,
                        j = c * g,
                        k = c * h,
                        l = c * i,
                        m = d * h,
                        n = d * i,
                        o = e * i,
                        p = f * g,
                        q = f * h,
                        r = f * i;
                    return a[0] = 1 - (m + o), a[3] = k + r, a[6] = l - q, a[1] = k - r, a[4] = 1 - (j + o), a[7] = n + p, a[2] = l + q, a[5] = n - p, a[8] = 1 - (j + m), a
                }, h.normalFromMat4 = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = b[4],
                        h = b[5],
                        i = b[6],
                        j = b[7],
                        k = b[8],
                        l = b[9],
                        m = b[10],
                        n = b[11],
                        o = b[12],
                        p = b[13],
                        q = b[14],
                        r = b[15],
                        s = c * h - d * g,
                        t = c * i - e * g,
                        u = c * j - f * g,
                        v = d * i - e * h,
                        w = d * j - f * h,
                        x = e * j - f * i,
                        y = k * p - l * o,
                        z = k * q - m * o,
                        A = k * r - n * o,
                        B = l * q - m * p,
                        C = l * r - n * p,
                        D = m * r - n * q,
                        E = s * D - t * C + u * B + v * A - w * z + x * y;
                    return E ? (E = 1 / E, a[0] = (h * D - i * C + j * B) * E, a[1] = (i * A - g * D - j * z) * E, a[2] = (g * C - h * A + j * y) * E, a[3] = (e * C - d * D - f * B) * E, a[4] = (c * D - e * A + f * z) * E, a[5] = (d * A - c * C - f * y) * E, a[6] = (p * x - q * w + r * v) * E, a[7] = (q * u - o * x - r * t) * E, a[8] = (o * w - p * u + r * s) * E, a) : null
                }, h.str = function(a) {
                    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")"
                }, "undefined" != typeof a && (a.mat3 = h);
                var i = {};
                i.create = function() {
                    var a = new c(16);
                    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
                }, i.fromValues = function(a, b, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    var r = new c(16);
                    return r[0] = a, r[1] = b, r[2] = d, r[3] = e, r[4] = f, r[5] = g, r[6] = h, r[7] = i, r[8] = j, r[9] = k, r[10] = l, r[11] = m, r[12] = n, r[13] = o, r[14] = p, r[15] = q, r
                }, i.clone = function(a) {
                    var b = new c(16);
                    return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15], b
                }, i.copy = function(a, b) {
                    return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a
                }, i.identity = function(a) {
                    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
                }, i.transpose = function(a, b) {
                    if (a === b) {
                        var c = b[1],
                            d = b[2],
                            e = b[3],
                            f = b[6],
                            g = b[7],
                            h = b[11];
                        a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = c, a[6] = b[9], a[7] = b[13], a[8] = d, a[9] = f, a[11] = b[14], a[12] = e, a[13] = g, a[14] = h
                    } else a[0] = b[0], a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = b[1], a[5] = b[5], a[6] = b[9], a[7] = b[13], a[8] = b[2], a[9] = b[6], a[10] = b[10], a[11] = b[14], a[12] = b[3], a[13] = b[7], a[14] = b[11], a[15] = b[15];
                    return a
                }, i.invert = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = b[4],
                        h = b[5],
                        i = b[6],
                        j = b[7],
                        k = b[8],
                        l = b[9],
                        m = b[10],
                        n = b[11],
                        o = b[12],
                        p = b[13],
                        q = b[14],
                        r = b[15],
                        s = c * h - d * g,
                        t = c * i - e * g,
                        u = c * j - f * g,
                        v = d * i - e * h,
                        w = d * j - f * h,
                        x = e * j - f * i,
                        y = k * p - l * o,
                        z = k * q - m * o,
                        A = k * r - n * o,
                        B = l * q - m * p,
                        C = l * r - n * p,
                        D = m * r - n * q,
                        E = s * D - t * C + u * B + v * A - w * z + x * y;
                    return E ? (E = 1 / E, a[0] = (h * D - i * C + j * B) * E, a[1] = (e * C - d * D - f * B) * E, a[2] = (p * x - q * w + r * v) * E, a[3] = (m * w - l * x - n * v) * E, a[4] = (i * A - g * D - j * z) * E, a[5] = (c * D - e * A + f * z) * E, a[6] = (q * u - o * x - r * t) * E, a[7] = (k * x - m * u + n * t) * E, a[8] = (g * C - h * A + j * y) * E, a[9] = (d * A - c * C - f * y) * E, a[10] = (o * w - p * u + r * s) * E, a[11] = (l * u - k * w - n * s) * E, a[12] = (h * z - g * B - i * y) * E, a[13] = (c * B - d * z + e * y) * E, a[14] = (p * t - o * v - q * s) * E, a[15] = (k * v - l * t + m * s) * E, a) : null
                }, i.adjoint = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = b[4],
                        h = b[5],
                        i = b[6],
                        j = b[7],
                        k = b[8],
                        l = b[9],
                        m = b[10],
                        n = b[11],
                        o = b[12],
                        p = b[13],
                        q = b[14],
                        r = b[15];
                    return a[0] = h * (m * r - n * q) - l * (i * r - j * q) + p * (i * n - j * m), a[1] = -(d * (m * r - n * q) - l * (e * r - f * q) + p * (e * n - f * m)), a[2] = d * (i * r - j * q) - h * (e * r - f * q) + p * (e * j - f * i), a[3] = -(d * (i * n - j * m) - h * (e * n - f * m) + l * (e * j - f * i)), a[4] = -(g * (m * r - n * q) - k * (i * r - j * q) + o * (i * n - j * m)), a[5] = c * (m * r - n * q) - k * (e * r - f * q) + o * (e * n - f * m), a[6] = -(c * (i * r - j * q) - g * (e * r - f * q) + o * (e * j - f * i)), a[7] = c * (i * n - j * m) - g * (e * n - f * m) + k * (e * j - f * i), a[8] = g * (l * r - n * p) - k * (h * r - j * p) + o * (h * n - j * l), a[9] = -(c * (l * r - n * p) - k * (d * r - f * p) + o * (d * n - f * l)), a[10] = c * (h * r - j * p) - g * (d * r - f * p) + o * (d * j - f * h), a[11] = -(c * (h * n - j * l) - g * (d * n - f * l) + k * (d * j - f * h)), a[12] = -(g * (l * q - m * p) - k * (h * q - i * p) + o * (h * m - i * l)), a[13] = c * (l * q - m * p) - k * (d * q - e * p) + o * (d * m - e * l), a[14] = -(c * (h * q - i * p) - g * (d * q - e * p) + o * (d * i - e * h)), a[15] = c * (h * m - i * l) - g * (d * m - e * l) + k * (d * i - e * h), a
                }, i.determinant = function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2],
                        e = a[3],
                        f = a[4],
                        g = a[5],
                        h = a[6],
                        i = a[7],
                        j = a[8],
                        k = a[9],
                        l = a[10],
                        m = a[11],
                        n = a[12],
                        o = a[13],
                        p = a[14],
                        q = a[15],
                        r = b * g - c * f,
                        s = b * h - d * f,
                        t = b * i - e * f,
                        u = c * h - d * g,
                        v = c * i - e * g,
                        w = d * i - e * h,
                        x = j * o - k * n,
                        y = j * p - l * n,
                        z = j * q - m * n,
                        A = k * p - l * o,
                        B = k * q - m * o,
                        C = l * q - m * p;
                    return r * C - s * B + t * A + u * z - v * y + w * x
                }, i.multiply = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = b[4],
                        i = b[5],
                        j = b[6],
                        k = b[7],
                        l = b[8],
                        m = b[9],
                        n = b[10],
                        o = b[11],
                        p = b[12],
                        q = b[13],
                        r = b[14],
                        s = b[15],
                        t = c[0],
                        u = c[1],
                        v = c[2],
                        w = c[3];
                    return a[0] = t * d + u * h + v * l + w * p, a[1] = t * e + u * i + v * m + w * q, a[2] = t * f + u * j + v * n + w * r, a[3] = t * g + u * k + v * o + w * s, t = c[4], u = c[5], v = c[6], w = c[7], a[4] = t * d + u * h + v * l + w * p, a[5] = t * e + u * i + v * m + w * q, a[6] = t * f + u * j + v * n + w * r, a[7] = t * g + u * k + v * o + w * s, t = c[8], u = c[9], v = c[10], w = c[11], a[8] = t * d + u * h + v * l + w * p, a[9] = t * e + u * i + v * m + w * q, a[10] = t * f + u * j + v * n + w * r, a[11] = t * g + u * k + v * o + w * s, t = c[12], u = c[13], v = c[14], w = c[15], a[12] = t * d + u * h + v * l + w * p, a[13] = t * e + u * i + v * m + w * q, a[14] = t * f + u * j + v * n + w * r, a[15] = t * g + u * k + v * o + w * s, a
                }, i.mul = i.multiply, i.translate = function(a, b, c) {
                    var d, e, f, g, h, i, j, k, l, m, n, o, p = c[0],
                        q = c[1],
                        r = c[2];
                    return b === a ? (a[12] = b[0] * p + b[4] * q + b[8] * r + b[12], a[13] = b[1] * p + b[5] * q + b[9] * r + b[13], a[14] = b[2] * p + b[6] * q + b[10] * r + b[14], a[15] = b[3] * p + b[7] * q + b[11] * r + b[15]) : (d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], m = b[9], n = b[10], o = b[11], a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = h, a[5] = i, a[6] = j, a[7] = k, a[8] = l, a[9] = m, a[10] = n, a[11] = o, a[12] = d * p + h * q + l * r + b[12], a[13] = e * p + i * q + m * r + b[13], a[14] = f * p + j * q + n * r + b[14], a[15] = g * p + k * q + o * r + b[15]), a
                }, i.scale = function(a, b, c) {
                    var d = c[0],
                        e = c[1],
                        f = c[2];
                    return a[0] = b[0] * d, a[1] = b[1] * d, a[2] = b[2] * d, a[3] = b[3] * d, a[4] = b[4] * e, a[5] = b[5] * e, a[6] = b[6] * e, a[7] = b[7] * e, a[8] = b[8] * f, a[9] = b[9] * f, a[10] = b[10] * f, a[11] = b[11] * f, a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a
                }, i.rotate = function(a, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = e[0],
                        E = e[1],
                        F = e[2],
                        G = Math.sqrt(D * D + E * E + F * F);
                    return Math.abs(G) < b ? null : (G = 1 / G, D *= G, E *= G, F *= G, f = Math.sin(d), g = Math.cos(d), h = 1 - g, i = c[0], j = c[1], k = c[2], l = c[3], m = c[4], n = c[5], o = c[6], p = c[7], q = c[8], r = c[9], s = c[10], t = c[11], u = D * D * h + g, v = E * D * h + F * f, w = F * D * h - E * f, x = D * E * h - F * f, y = E * E * h + g, z = F * E * h + D * f, A = D * F * h + E * f, B = E * F * h - D * f, C = F * F * h + g, a[0] = i * u + m * v + q * w, a[1] = j * u + n * v + r * w, a[2] = k * u + o * v + s * w, a[3] = l * u + p * v + t * w, a[4] = i * x + m * y + q * z, a[5] = j * x + n * y + r * z, a[6] = k * x + o * y + s * z, a[7] = l * x + p * y + t * z, a[8] = i * A + m * B + q * C, a[9] = j * A + n * B + r * C, a[10] = k * A + o * B + s * C, a[11] = l * A + p * B + t * C, c !== a && (a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]), a)
                }, i.rotateX = function(a, b, c) {
                    var d = Math.sin(c),
                        e = Math.cos(c),
                        f = b[4],
                        g = b[5],
                        h = b[6],
                        i = b[7],
                        j = b[8],
                        k = b[9],
                        l = b[10],
                        m = b[11];
                    return b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[4] = f * e + j * d, a[5] = g * e + k * d, a[6] = h * e + l * d, a[7] = i * e + m * d, a[8] = j * e - f * d, a[9] = k * e - g * d, a[10] = l * e - h * d, a[11] = m * e - i * d, a
                }, i.rotateY = function(a, b, c) {
                    var d = Math.sin(c),
                        e = Math.cos(c),
                        f = b[0],
                        g = b[1],
                        h = b[2],
                        i = b[3],
                        j = b[8],
                        k = b[9],
                        l = b[10],
                        m = b[11];
                    return b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = f * e - j * d, a[1] = g * e - k * d, a[2] = h * e - l * d, a[3] = i * e - m * d, a[8] = f * d + j * e, a[9] = g * d + k * e, a[10] = h * d + l * e, a[11] = i * d + m * e, a
                }, i.rotateZ = function(a, b, c) {
                    var d = Math.sin(c),
                        e = Math.cos(c),
                        f = b[0],
                        g = b[1],
                        h = b[2],
                        i = b[3],
                        j = b[4],
                        k = b[5],
                        l = b[6],
                        m = b[7];
                    return b !== a && (a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = f * e + j * d, a[1] = g * e + k * d, a[2] = h * e + l * d, a[3] = i * e + m * d, a[4] = j * e - f * d, a[5] = k * e - g * d, a[6] = l * e - h * d, a[7] = m * e - i * d, a
                }, i.fromRotationTranslation = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = d + d,
                        i = e + e,
                        j = f + f,
                        k = d * h,
                        l = d * i,
                        m = d * j,
                        n = e * i,
                        o = e * j,
                        p = f * j,
                        q = g * h,
                        r = g * i,
                        s = g * j;
                    return a[0] = 1 - (n + p), a[1] = l + s, a[2] = m - r, a[3] = 0, a[4] = l - s, a[5] = 1 - (k + p), a[6] = o + q, a[7] = 0, a[8] = m + r, a[9] = o - q, a[10] = 1 - (k + n), a[11] = 0, a[12] = c[0], a[13] = c[1], a[14] = c[2], a[15] = 1, a
                }, i.fromQuat = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = c + c,
                        h = d + d,
                        i = e + e,
                        j = c * g,
                        k = c * h,
                        l = c * i,
                        m = d * h,
                        n = d * i,
                        o = e * i,
                        p = f * g,
                        q = f * h,
                        r = f * i;
                    return a[0] = 1 - (m + o), a[1] = k + r, a[2] = l - q, a[3] = 0, a[4] = k - r, a[5] = 1 - (j + o), a[6] = n + p, a[7] = 0, a[8] = l + q, a[9] = n - p, a[10] = 1 - (j + m), a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
                }, i.frustum = function(a, b, c, d, e, f, g) {
                    var h = 1 / (c - b),
                        i = 1 / (e - d),
                        j = 1 / (f - g);
                    return a[0] = 2 * f * h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * f * i, a[6] = 0, a[7] = 0, a[8] = (c + b) * h, a[9] = (e + d) * i, a[10] = (g + f) * j, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = g * f * 2 * j, a[15] = 0, a
                }, i.perspective = function(a, b, c, d, e) {
                    var f = 1 / Math.tan(b / 2),
                        g = 1 / (d - e);
                    return a[0] = f / c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = f, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (e + d) * g, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = 2 * e * d * g, a[15] = 0, a
                }, i.ortho = function(a, b, c, d, e, f, g) {
                    var h = 1 / (b - c),
                        i = 1 / (d - e),
                        j = 1 / (f - g);
                    return a[0] = -2 * h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = -2 * i, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * j, a[11] = 0, a[12] = (b + c) * h, a[13] = (e + d) * i, a[14] = (g + f) * j, a[15] = 1, a
                }, i.lookAt = function(a, c, d, e) {
                    var f, g, h, j, k, l, m, n, o, p, q = c[0],
                        r = c[1],
                        s = c[2],
                        t = e[0],
                        u = e[1],
                        v = e[2],
                        w = d[0],
                        x = d[1],
                        y = d[2];
                    return Math.abs(q - w) < b && Math.abs(r - x) < b && Math.abs(s - y) < b ? i.identity(a) : (m = q - w, n = r - x, o = s - y, p = 1 / Math.sqrt(m * m + n * n + o * o), m *= p, n *= p, o *= p, f = u * o - v * n, g = v * m - t * o, h = t * n - u * m, p = Math.sqrt(f * f + g * g + h * h), p ? (p = 1 / p, f *= p, g *= p, h *= p) : (f = 0, g = 0, h = 0), j = n * h - o * g, k = o * f - m * h, l = m * g - n * f, p = Math.sqrt(j * j + k * k + l * l), p ? (p = 1 / p, j *= p, k *= p, l *= p) : (j = 0, k = 0, l = 0), a[0] = f, a[1] = j, a[2] = m, a[3] = 0, a[4] = g, a[5] = k, a[6] = n, a[7] = 0, a[8] = h, a[9] = l, a[10] = o, a[11] = 0, a[12] = -(f * q + g * r + h * s), a[13] = -(j * q + k * r + l * s), a[14] = -(m * q + n * r + o * s), a[15] = 1, a)
                }, i.str = function(a) {
                    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")"
                }, "undefined" != typeof a && (a.mat4 = i);
                var j = {};
                j.create = function() {
                    var a = new c(4);
                    return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a
                }, j.rotationTo = function() {
                    var a = f.create(),
                        b = f.fromValues(1, 0, 0),
                        c = f.fromValues(0, 1, 0);
                    return function(d, e, g) {
                        var h = f.dot(e, g);
                        return -.999999 > h ? (f.cross(a, b, e), f.length(a) < 1e-6 && f.cross(a, c, e), f.normalize(a, a), j.setAxisAngle(d, a, Math.PI), d) : h > .999999 ? (d[0] = 0, d[1] = 0, d[2] = 0, d[3] = 1, d) : (f.cross(a, e, g), d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = 1 + h, j.normalize(d, d))
                    }
                }(), j.setAxes = function() {
                    var a = h.create();
                    return function(b, c, d, e) {
                        return a[0] = d[0], a[3] = d[1], a[6] = d[2], a[1] = e[0], a[4] = e[1], a[7] = e[2], a[2] = c[0], a[5] = c[1], a[8] = c[2], j.normalize(b, j.fromMat3(b, a))
                    }
                }(), j.clone = g.clone, j.fromValues = g.fromValues, j.copy = g.copy, j.set = g.set, j.identity = function(a) {
                    return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a
                }, j.setAxisAngle = function(a, b, c) {
                    c = .5 * c;
                    var d = Math.sin(c);
                    return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = Math.cos(c), a
                }, j.add = g.add, j.multiply = function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = c[0],
                        i = c[1],
                        j = c[2],
                        k = c[3];
                    return a[0] = d * k + g * h + e * j - f * i, a[1] = e * k + g * i + f * h - d * j, a[2] = f * k + g * j + d * i - e * h, a[3] = g * k - d * h - e * i - f * j, a
                }, j.mul = j.multiply, j.scale = g.scale, j.rotateX = function(a, b, c) {
                    c *= .5;
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = Math.sin(c),
                        i = Math.cos(c);
                    return a[0] = d * i + g * h, a[1] = e * i + f * h, a[2] = f * i - e * h, a[3] = g * i - d * h, a
                }, j.rotateY = function(a, b, c) {
                    c *= .5;
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = Math.sin(c),
                        i = Math.cos(c);
                    return a[0] = d * i - f * h, a[1] = e * i + g * h, a[2] = f * i + d * h, a[3] = g * i - e * h, a
                }, j.rotateZ = function(a, b, c) {
                    c *= .5;
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = Math.sin(c),
                        i = Math.cos(c);
                    return a[0] = d * i + e * h, a[1] = e * i - d * h, a[2] = f * i + g * h, a[3] = g * i - f * h, a
                }, j.calculateW = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2];
                    return a[0] = c, a[1] = d, a[2] = e, a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), a
                }, j.dot = g.dot, j.lerp = g.lerp, j.slerp = function(a, b, c, d) {
                    var e, f, g, h, i, j = b[0],
                        k = b[1],
                        l = b[2],
                        m = b[3],
                        n = c[0],
                        o = c[1],
                        p = c[2],
                        q = c[3];
                    return f = j * n + k * o + l * p + m * q, 0 > f && (f = -f, n = -n, o = -o, p = -p, q = -q), 1 - f > 1e-6 ? (e = Math.acos(f), g = Math.sin(e), h = Math.sin((1 - d) * e) / g, i = Math.sin(d * e) / g) : (h = 1 - d, i = d), a[0] = h * j + i * n, a[1] = h * k + i * o, a[2] = h * l + i * p, a[3] = h * m + i * q, a
                }, j.invert = function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = c * c + d * d + e * e + f * f,
                        h = g ? 1 / g : 0;
                    return a[0] = -c * h, a[1] = -d * h, a[2] = -e * h, a[3] = f * h, a
                }, j.conjugate = function(a, b) {
                    return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = b[3], a
                }, j.length = g.length, j.len = j.length, j.squaredLength = g.squaredLength, j.sqrLen = j.squaredLength, j.normalize = g.normalize, j.fromMat3 = function() {
                    var a = "undefined" != typeof Int8Array ? new Int8Array([1, 2, 0]) : [1, 2, 0];
                    return function(b, c) {
                        var d, e = c[0] + c[4] + c[8];
                        if (e > 0) d = Math.sqrt(e + 1), b[3] = .5 * d, d = .5 / d, b[0] = (c[7] - c[5]) * d, b[1] = (c[2] - c[6]) * d, b[2] = (c[3] - c[1]) * d;
                        else {
                            var f = 0;
                            c[4] > c[0] && (f = 1), c[8] > c[3 * f + f] && (f = 2);
                            var g = a[f],
                                h = a[g];
                            d = Math.sqrt(c[3 * f + f] - c[3 * g + g] - c[3 * h + h] + 1), b[f] = .5 * d, d = .5 / d, b[3] = (c[3 * h + g] - c[3 * g + h]) * d, b[g] = (c[3 * g + f] + c[3 * f + g]) * d, b[h] = (c[3 * h + f] + c[3 * f + h]) * d
                        }
                        return b
                    }
                }(), j.str = function(a) {
                    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
                }, "undefined" != typeof a && (a.quat = j)
            }(b.exports)
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            return b > a
        }
        return a.derive = function(a, b) {
            for (var c in b.prototype) a.prototype[c] = b.prototype[c]
        }, a.copy = function(a) {
            a = a || {};
            var b = {};
            for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            return b
        }, a.binarySearch = function(a, c, d) {
            if (0 === a.length) return -1;
            d = d || b;
            for (var e = 0, f = a.length, g = e + f >> 1;;) {
                var h = a[g];
                if (d(c, h)) f = g;
                else {
                    if (!d(h, c)) return g;
                    e = g
                }
                var i = e + f >> 1;
                if (i === g) return -1;
                g = i
            }
            return -1
        }, a.indexFirstLargerEqualThan = function(a, c, d) {
            if (d = d || b, 0 === a.length || d(c, a[0])) return -1;
            for (var e = 0, f = a.length, g = e + f >> 1;;) {
                var h = a[g];
                d(c, h) ? f = g : d(h, c) ? e = g : f = g + 1;
                var i = e + f >> 1;
                if (i === g) return g;
                g = i
            }
        }, a.indexLastSmallerThan = function(a, c, d) {
            if (d = d || b, 0 === a.length || d(a[a.length - 1], c)) return a.length - 1;
            for (var e = 0, f = a.length, g = e + f >> 1;;) {
                var h = a[g];
                d(c, h) ? f = g : e = g;
                var i = e + f >> 1;
                if (i === g) return g - 1;
                g = i
            }
        }, a.indexLastSmallerEqualThan = function(a, c, d) {
            if (d = d || b, 0 === a.length || d(a[a.length - 1], c)) return a.length - 1;
            if (d(c, a[0])) return -1;
            for (var e = 0, f = a.length, g = e + f >> 1;;) {
                var h = a[g];
                d(c, h) ? f = g : e = g;
                var i = e + f >> 1;
                if (i === g) return g;
                g = i
            }
        }, !0
    }(this);
var geom = function() {
    "use strict";

    function a(a, b, c) {
        return c ? a * b : b * (a - 1) + 1
    }

    function b(b, c, d, e, f, h) {
        f = f || !1, e = e || .5;
        var i = null,
            j = 3 * a(c, d, f);
        i = h ? h.request(j) : new Float32Array(j);
        var k, l, m, n = 0,
            o = 1 / d,
            p = vec3.create(),
            q = vec3.create(),
            r = vec3.create(),
            s = vec3.create(),
            t = vec3.create(),
            u = vec3.create();
        for (vec3.set(s, b[0], b[1], b[2]), vec3.set(t, b[3], b[4], b[5]), f ? (vec3.set(r, b[b.length - 3], b[b.length - 2], b[b.length - 1]), vec3.sub(p, t, r), vec3.scale(p, p, e)) : (vec3.set(r, b[0], b[1], b[2]), vec3.set(p, 0, 0, 0)), k = 1, m = c - 1; m > k; ++k) {
            for (vec3.set(u, b[3 * (k + 1)], b[3 * (k + 1) + 1], b[3 * (k + 1) + 2]), vec3.sub(q, u, s), vec3.scale(q, q, e), l = 0; d > l; ++l) g(i, s, p, t, q, o * l, n), n += 3;
            vec3.copy(r, s), vec3.copy(s, t), vec3.copy(t, u), vec3.copy(p, q)
        }
        for (f ? (vec3.set(u, b[0], b[1], b[3]), vec3.sub(q, u, s), vec3.scale(q, q, e)) : vec3.set(q, 0, 0, 0), l = 0; d > l; ++l) g(i, s, p, t, q, o * l, n), n += 3;
        if (!f) return i[n] = b[3 * (c - 1) + 0], i[n + 1] = b[3 * (c - 1) + 1], i[n + 2] = b[3 * (c - 1) + 2], i;
        for (vec3.copy(r, s), vec3.copy(s, t), vec3.copy(t, u), vec3.copy(p, q), vec3.set(u, b[3], b[4], b[5]), vec3.sub(q, u, s), vec3.scale(q, q, e), l = 0; d > l; ++l) g(i, s, p, t, q, o * l, n), n += 3;
        return i
    }

    function c(a, b) {
        this._center = a || vec3.create(), this._radius = b || 1
    }
    var d = function() {
            var a = vec3.create();
            return function(b, c, d) {
                return vec3.cross(a, b, c), Math.atan2(vec3.dot(a, d), vec3.dot(b, c))
            }
        }(),
        e = function() {
            var a = vec3.create();
            return function(b, c) {
                return vec3.copy(a, c), Math.abs(c[0]) < Math.abs(c[1]) ? Math.abs(c[0]) < Math.abs(c[2]) ? a[0] += 1 : a[2] += 1 : Math.abs(c[1]) < Math.abs(c[2]) ? a[1] += 1 : a[2] += 1, vec3.cross(b, c, a)
            }
        }(),
        f = function(a, b, c) {
            var d = Math.sin(c),
                e = Math.cos(c),
                f = b[0],
                g = b[1],
                h = b[2],
                i = f * f,
                j = f * g,
                k = f * h,
                l = g * g,
                m = g * h,
                n = h * h;
            return a[0] = i + e - i * e, a[1] = j - e * j - d * h, a[2] = k - e * k + d * g, a[3] = j - e * j + d * h, a[4] = l + e - e * l, a[5] = m - e * m - d * f, a[6] = k - e * k - d * g, a[7] = m - e * m + d * f, a[8] = n + e - e * n, a
        },
        g = function() {
            var a = vec3.create();
            return function(b, c, d, e, f, g, h) {
                var i = g * g,
                    j = 3 - 2 * g,
                    k = i * j,
                    l = 1 - k,
                    m = i * (g - 2) + g,
                    n = i * (g - 1);
                vec3.copy(a, c), vec3.scale(a, a, l), vec3.scaleAndAdd(a, a, d, m), vec3.scaleAndAdd(a, a, e, k), vec3.scaleAndAdd(a, a, f, n), b[h] = a[0], b[h + 1] = a[1], b[h + 2] = a[2]
            }
        }();
    return c.prototype.center = function() {
        return this._center
    }, c.prototype.radius = function() {
        return this._radius
    }, {
        signedAngle: d,
        axisRotation: f,
        ortho: e,
        catmullRomSpline: b,
        cubicHermiteInterpolate: g,
        catmullRomSplineNumPoints: a,
        Sphere: c
    }
}();
"undefined" != typeof exports && (module.exports = geom),
    function(a) {
        "use strict";

        function b(b, c) {
            this._colors = b;
            for (var d = 0; d < this._colors.length; ++d) this._colors[d] = a.forceRGB(this._colors[d]);
            this._stops = c
        }

        function c(a, b, c) {
            this.colorFor = a, this._beginFunc = b, this._endFunc = c
        }

        function d(a, b, c) {
            var d = null,
                e = null;
            return a[b](function(a) {
                var b = a.prop(c);
                return null === d && null === e ? (d = e = b, void 0) : (d = Math.min(d, b), e = Math.max(e, b), void 0)
            }), {
                min: d,
                max: e
            }
        }

        function e(a, b, e, f, g) {
            return b || (b = i("rainbow")), new c(function(c, d, e) {
                var f = 0;
                this._min !== this._max && (f = (g(c).prop(a) - this._min) / (this._max - this._min)), j(d, e, b, f)
            }, function(b) {
                return void 0 !== e ? (this._min = e[0], this._max = e[1], void 0) : (e = d(b, f, a), this._min = e.min, this._max = e.max, void 0)
            }, function() {})
        }
        a.rgb = {};
        var f = a.rgb;
        a.rgb.create = vec4.create, a.rgb.scale = vec4.scale, a.rgb.copy = vec4.copy, a.rgb.fromValues = vec4.fromValues, a.rgb.mix = function(a, b, c, d) {
            var e = 1 - d;
            return a[0] = b[0] * d + c[0] * e, a[1] = b[1] * d + c[1] * e, a[2] = b[2] * d + c[2] * e, a[3] = b[3] * d + c[3] * e, a
        };
        var g = {
            white: f.fromValues(1, 1, 1, 1),
            black: f.fromValues(0, 0, 0, 1),
            grey: f.fromValues(.5, .5, .5, 1),
            lightgrey: f.fromValues(.8, .8, .8, 1),
            darkgrey: f.fromValues(.3, .3, .3, 1),
            red: f.fromValues(1, 0, 0, 1),
            darkred: f.fromValues(.5, 0, 0, 1),
            lightred: f.fromValues(1, .5, .5, 1),
            green: f.fromValues(0, 1, 0, 1),
            darkgreen: f.fromValues(0, .5, 0, 1),
            lightgreen: f.fromValues(.5, 1, .5, 1),
            blue: f.fromValues(0, 0, 1, 1),
            darkblue: f.fromValues(0, 0, .5, 1),
            lightblue: f.fromValues(.5, .5, 1, 1),
            yellow: f.fromValues(1, 1, 0, 1),
            darkyellow: f.fromValues(.5, .5, 0, 1),
            lightyellow: f.fromValues(1, 1, .5, 1),
            cyan: f.fromValues(0, 1, 1, 1),
            darkcyan: f.fromValues(0, .5, .5, 1),
            lightcyan: f.fromValues(.5, 1, 1, 1),
            magenta: f.fromValues(1, 0, 1, 1),
            darkmagenta: f.fromValues(.5, 0, .5, 1),
            lightmagenta: f.fromValues(1, .5, 1, 1),
            orange: f.fromValues(1, .5, 0, 1),
            darkorange: f.fromValues(.5, .25, 0, 1),
            lightorange: f.fromValues(1, .75, .5, 1)
        };
        a.forceRGB = function(a) {
            if ("string" == typeof a) {
                var b = g[a];
                if (void 0 !== b) return b;
                if (a.length > 0 && "#" === a[0]) {
                    var c, d, e, h;
                    if (4 === a.length || 5 === a.length) {
                        c = parseInt(a[1], 16), d = parseInt(a[2], 16), e = parseInt(a[3], 16), h = 15, 5 === a.length && (h = parseInt(a[4], 16));
                        var i = 1 / 15;
                        return f.fromValues(i * c, i * d, i * e, i * h)
                    }
                    if (7 === a.length || 9 === a.length) {
                        c = parseInt(a.substr(1, 2), 16), d = parseInt(a.substr(3, 2), 16), e = parseInt(a.substr(5, 2), 16), h = 255, 9 === a.length && (h = parseInt(a.substr(7, 2), 16));
                        var j = 1 / 255;
                        return f.fromValues(j * c, j * d, j * e, j * h)
                    }
                }
            }
            return 3 === a.length ? [a[0], a[1], a[2], 1] : a
        }, b.prototype.colorAt = function(a, b) {
            if (b <= this._stops[0]) return vec4.copy(a, this._colors[0]);
            if (b >= this._stops[this._stops.length - 1]) return vec4.copy(a, this._colors[this._stops.length - 1]);
            for (var c = 0, d = 0; d < this._stops.length && !(this._stops[d] > b); ++d) c = d;
            var e = c + 1,
                g = this._stops[c],
                h = this._stops[e],
                i = (b - g) / (h - g);
            return f.mix(a, this._colors[e], this._colors[c], i)
        };
        var h = {};
        a.gradient = function(a, c) {
            if ("string" == typeof a) return h[a];
            if (c = c || "equal", "equal" === c) {
                c = [];
                for (var d = 0; d < a.length; ++d) c.push(1 * d / (a.length - 1))
            }
            return new b(a, c)
        };
        var i = a.gradient;
        h.rainbow = i(["red", "yellow", "green", "blue"]), h.reds = i(["lightred", "darkred"]), h.greens = i(["lightgreen", "darkgreen"]), h.blues = i(["lightblue", "darkblue"]), h.trafficlight = i(["green", "yellow", "red"]), h.heatmap = i(["red", "white", "blue"]), c.prototype.begin = function(a) {
            this._beginFunc && this._beginFunc(a)
        }, c.prototype.end = function(a) {
            this._endFunc && this._endFunc(a)
        }, a.color = {}, a.ColorOp = c, a.color.uniform = function(b) {
            return b = a.forceRGB(b), new c(function(a, c, d) {
                c[d + 0] = b[0], c[d + 1] = b[1], c[d + 2] = b[2], c[d + 3] = b[3]
            }, null, null)
        }, a.color.byElement = function() {
            return new c(function(a, b, c) {
                var d = a.element();
                return "C" === d ? (b[c] = .8, b[c + 1] = .8, b[c + 2] = .8, b[c + 3] = 1, b) : "N" === d ? (b[c] = 0, b[c + 1] = 0, b[c + 2] = 1, b[c + 3] = 1, b) : "O" === d ? (b[c] = 1, b[c + 1] = 0, b[c + 2] = 0, b[c + 3] = 1, b) : "S" === d ? (b[c] = .8, b[c + 1] = .8, b[c + 2] = 0, b[c + 3] = 1, b) : "CA" === d ? (b[c] = .533, b[c + 1] = .533, b[c + 2] = .666, b[c + 3] = 1, b) : (b[c] = 1, b[c + 1] = 0, b[c + 2] = 1, b[c + 3] = 1, b)
            }, null, null)
        }, a.color.bySS = function() {
            return new c(function(a, b, c) {
                switch (a.residue().ss()) {
                    case "C":
                        return b[c] = .8, b[c + 1] = .8, b[c + 2] = .8, b[c + 3] = 1, void 0;
                    case "H":
                        return b[c] = .6, b[c + 1] = .6, b[c + 2] = .9, b[c + 3] = 1, void 0;
                    case "E":
                        return b[c] = .2, b[c + 1] = .8, b[c + 2] = .2, b[c + 3] = 1, void 0
                }
            }, null, null)
        }, a.color.rainbow = function(a) {
            a || (a = i("rainbow"));
            var b = new c(function(b, c, d) {
                var e = b.residue().index(),
                    f = this.chainLimits[b.residue().chain().name()],
                    g = 0;
                void 0 !== f && (g = (e - f[0]) / (f[1] - f[0]));
                var h = [1, 1, 1, 1];
                a.colorAt(h, g), c[d] = h[0], c[d + 1] = h[1], c[d + 2] = h[2], c[d + 3] = h[3]
            }, function(a) {
                var b = a.chains();
                this.chainLimits = {};
                for (var c = 0; c < b.length; ++c) {
                    var d = b[c].backboneTraces();
                    if (0 !== d.length) {
                        for (var e = d[0].residueAt(0).index(), f = d[0].residueAt(d[0].length() - 1).index(), g = 1; g < d.length; ++g) {
                            var h = d[g];
                            e = Math.min(e, h.residueAt(0).index()), f = Math.max(f, h.residueAt(h.length() - 1).index())
                        }
                        this.chainLimits[b[c].name()] = [e, f]
                    }
                }
            }, function() {
                this.chainLimits = null
            });
            return b
        }, a.color.ssSuccession = function(a, b) {
            a || (a = i("rainbow")), b || (b = forceRGB("lightgrey"));
            var d = new c(function(c, d, e) {
                var f = c.residue().index(),
                    g = this.chainLimits[c.residue().chain().name()],
                    h = g.indices[f];
                if (-1 === h) return d[e] = b[0], d[e + 1] = b[1], d[e + 2] = b[2], d[e + 3] = b[3], void 0;
                var i = 0;
                null === g.max, null !== g.max && (i = h / (g.max > 0 ? g.max : 1));
                var j = [0, 0, 0, 0];
                a.colorAt(j, i), d[e] = j[0], d[e + 1] = j[1], d[e + 2] = j[2], d[e + 3] = j[3]
            }, function(a) {
                var b = a.chains();
                this.chainLimits = {};
                for (var c = 0; c < b.length; ++c) {
                    for (var d = b[c].residues(), e = null, f = {}, g = 0, h = "C", i = 0; i < d.length; ++i) {
                        var j = d[i].ss();
                        "C" === j ? ("C" !== h && g++, f[d[i].index()] = -1) : (e = g, f[d[i].index()] = g), h = j
                    }
                    this.chainLimits[b[c].name()] = {
                        indices: f,
                        max: e
                    }
                }
            }, function() {
                this.chainLimits = null
            });
            return d
        }, a.color.byChain = function(a) {
            a || (a = i("rainbow"));
            var b = new c(function(b, c, d) {
                var e = (b.residue().index(), this.chainIndices[b.residue().chain().name()]),
                    f = e * this.scale,
                    g = [0, 0, 0, 0];
                a.colorAt(g, f), c[d + 0] = g[0], c[d + 1] = g[1], c[d + 2] = g[2], c[d + 3] = g[3]
            }, function(a) {
                var b = a.chains();
                this.chainIndices = {};
                for (var c = 0; c < b.length; ++c) this.chainIndices[b[c].name()] = c;
                this.scale = b.length > 1 ? 1 / (b.length - 1) : 1
            }, function() {
                this.chainIndices = null
            });
            return b
        };
        var j = function() {
            var a = vec4.create();
            return function(b, c, d, e) {
                d.colorAt(a, e), b[c + 0] = a[0], b[c + 1] = a[1], b[c + 2] = a[2], b[c + 3] = a[3]
            }
        }();
        return a.color.byAtomProp = function(a, b, c) {
            return e(a, b, c, "eachAtom", function(a) {
                return a
            })
        }, a.color.byResidueProp = function(a, b, c) {
            return e(a, b, c, "eachResidue", function(a) {
                return a.residue()
            })
        }, a.interpolateColor = function(a, b) {
            for (var c = new Float32Array(4 * (b * (a.length / 4 - 1) + 1)), d = 0, e = vec4.create(), f = vec4.create(), g = 1 / b, h = 0; h < a.length / 4 - 1; ++h) {
                vec4.set(e, a[4 * h + 0], a[4 * h + 1], a[4 * h + 2], a[4 * h + 3]), vec4.set(f, a[4 * h + 4], a[4 * h + 5], a[4 * h + 6], a[4 * h + 7]);
                for (var i = 0; b > i; ++i) {
                    var j = g * i;
                    c[d + 0] = e[0] * (1 - j) + f[0] * j, c[d + 1] = e[1] * (1 - j) + f[1] * j, c[d + 2] = e[2] * (1 - j) + f[2] * j, c[d + 3] = e[3] * (1 - j) + f[3] * j, d += 4
                }
            }
            return c[d + 0] = f[0], c[d + 1] = f[1], c[d + 2] = f[2], c[d + 3] = f[3], c
        }, !0
    }(this), "undefined" != typeof exports && (exports.AtomVertexAssoc = AtomVertexAssoc), AtomVertexAssoc.prototype.addAssoc = function(a, b, c, d) {
        this._assocs.push({
            atom: a,
            vertexArray: b,
            vertStart: c,
            vertEnd: d
        })
    }, AtomVertexAssoc.prototype.recolor = function(a, b) {
        var c = new Float32Array(4 * b.atomCount());
        this._callBeginEnd && a.begin(this._structure);
        var d = {};
        b.eachAtom(function(b, e) {
            d[b.index()] = e, a.colorFor(b, c, 4 * e)
        }), this._callBeginEnd && a.end(this._structure);
        for (var e = 0; e < this._assocs.length; ++e) {
            var f = this._assocs[e],
                g = d[f.atom.index()];
            if (void 0 !== g)
                for (var h = c[4 * g + 0], i = c[4 * g + 1], j = c[4 * g + 2], k = c[4 * g + 3], l = f.vertexArray, m = f.vertStart; m < f.vertEnd; ++m) l.setColor(m, h, i, j, k)
        }
    }, AtomVertexAssoc.prototype.getColorForAtom = function(a, b) {
        for (var c = 0; c < this._assocs.length; ++c) {
            var d = this._assocs[c];
            if (d.atom.full() === a.full()) return d.vertexArray.getColor(d.vertStart, b)
        }
        return null
    }, AtomVertexAssoc.prototype.setOpacity = function(a) {
        for (var b = 0; b < this._assocs.length; ++b)
            for (var c = this._assocs[b], d = c.vertexArray, e = c.vertStart; e < c.vertEnd; ++e) d.setOpacity(e, a)
    }, "undefined" != typeof exports && (exports.TraceVertexAssoc = TraceVertexAssoc), TraceVertexAssoc.prototype.setPerResidueColors = function(a, b) {
        this._perResidueColors[a] = b
    }, TraceVertexAssoc.prototype.addAssoc = function(a, b, c, d, e) {
        this._assocs.push({
            traceIndex: a,
            slice: c,
            vertStart: d,
            vertEnd: e,
            vertexArray: b
        })
    }, TraceVertexAssoc.prototype.recolor = function(a, b) {
        this._callBeginEnd && a.begin(this._structure);
        var c, d, e = [],
            f = this._structure.backboneTraces();
        for (c = 0; c < f.length; ++c) {
            var g = this._perResidueColors[c],
                h = 0,
                i = f[c];
            for (d = 0; d < i.length(); ++d) b.containsResidue(i.residueAt(d)) ? (a.colorFor(i.centralAtomAt(d), g, h), h += 4) : h += 4;
            this._interpolation > 1 ? e.push(interpolateColor(g, this._interpolation)) : e.push(g)
        }
        for (c = 0; c < this._assocs.length; ++c) {
            var j = this._assocs[c],
                k = j.slice,
                l = e[j.traceIndex],
                m = l[4 * k],
                n = l[4 * k + 1],
                o = l[4 * k + 2],
                p = l[4 * k + 3],
                q = j.vertexArray;
            for (d = j.vertStart; d < j.vertEnd; ++d) q.setColor(d, m, n, o, p)
        }
        this._callBeginEnd && a.end(this._structure)
    }, TraceVertexAssoc.prototype.getColorForAtom = function(a, b) {
        var c, d, e = this._structure.backboneTraces(),
            f = a.full().residue();
        for (c = 0; c < e.length; ++c) {
            var g = this._perResidueColors[c],
                h = 0,
                i = e[c];
            for (d = 0; d < i.length(); ++d) {
                if (f === i.residueAt(d).full()) return b[0] = g[h + 0], b[1] = g[h + 1], b[2] = g[h + 2], b[3] = g[h + 3], b;
                h += 4
            }
        }
        return null
    }, TraceVertexAssoc.prototype.setOpacity = function(a) {
        for (i = 0; i < this._assocs.length; ++i) {
            var b = this._assocs[i],
                c = b.vertexArray;
            for (j = b.vertStart; j < b.vertEnd; ++j) c.setOpacity(j, a)
        }
    },
    function(a) {
        "use strict";

        function b(a, b, c) {
            this._gl = a, this._vertBuffer = a.createBuffer(), this._float32Allocator = c || null, this._ready = !1, this._boundingSphere = null;
            var d = this._FLOATS_PER_VERT * b;
            this._vertData = c.request(d)
        }
        b.prototype.setColor = function(a, b, c, d, e) {
            var f = a * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
            this._vertData[f + 0] = b, this._vertData[f + 1] = c, this._vertData[f + 2] = d, this._vertData[f + 3] = e, this._ready = !1
        }, b.prototype.getColor = function(a, b) {
            var c = a * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
            return b[0] = this._vertData[c + 0], b[1] = this._vertData[c + 1], b[2] = this._vertData[c + 2], b[3] = this._vertData[c + 3], b
        }, b.prototype.setOpacity = function(a, b) {
            var c = a * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
            this._vertData[c + 3] = b, this._ready = !1
        }, b.prototype.boundingSphere = function() {
            return this._boundingSphere || (this._boundingSphere = this._calculateBoundingSphere()), this._boundingSphere
        }, b.prototype._calculateBoundingSphere = function() {
            var a = this.numVerts();
            if (0 === a) return null;
            var b, c, d = vec3.create();
            for (c = 0; a > c; ++c) b = c * this._FLOATS_PER_VERT, d[0] += this._vertData[b + 0], d[1] += this._vertData[b + 1], d[2] += this._vertData[b + 2];
            vec3.scale(d, d, 1 / a);
            var e = 0;
            for (c = 0; a > c; ++c) {
                b = c * this._FLOATS_PER_VERT;
                var f = d[0] - this._vertData[b + 0],
                    g = d[1] - this._vertData[b + 1],
                    h = d[2] - this._vertData[b + 2];
                e = Math.max(e, f * f + g * g + h * h)
            }
            return new geom.Sphere(d, Math.sqrt(e))
        }, b.prototype.destroy = function() {
            this._gl.deleteBuffer(this._vertBuffer), this._float32Allocator.release(this._vertData)
        }, b.prototype.bindBuffers = function() {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vertBuffer), this._ready || (this._gl.bufferData(this._gl.ARRAY_BUFFER, this._vertData, this._gl.STATIC_DRAW), this._ready = !0)
        }, b.prototype.updateSquaredSphereRadius = function() {
            var a = vec3.create();
            return function(b, c, d) {
                var e = this.boundingSphere();
                if (!e) return c;
                if (d) return vec3.transformMat4(a, e.center(), d), Math.max(vec3.sqrDist(a, b), c);
                var f = e.radius() * e.radius();
                return Math.max(vec3.sqrDist(e.center(), b) + f, c)
            }
        }(), b.prototype.updateProjectionIntervals = function() {
            var a = vec3.create();
            return function(b, c, d, e, f, g, h) {
                var i = this.boundingSphere();
                if (i) {
                    h ? vec3.transformMat4(a, i.center(), h) : vec3.copy(a, i.center());
                    var j = vec3.dot(b, a),
                        k = vec3.dot(c, a),
                        l = vec3.dot(d, a);
                    e.update(j - i.radius()), e.update(j + i.radius()), f.update(k - i.radius()), f.update(k + i.radius()), g.update(l - i.radius()), g.update(l + i.radius())
                }
            }
        }(), a.VertexArrayBase = b
    }(this),
    function(a) {
        "use strict";

        function b(a, b, c, d, e) {
            VertexArrayBase.prototype.constructor.call(this, a, b, d), this._indexBuffer = a.createBuffer(), this._uint16Allocator = e, this._numVerts = 0, this._maxVerts = b, this._numTriangles = 0, this._indexData = e.request(c)
        }
        return derive(b, VertexArrayBase), b.prototype.destroy = function() {
            VertexArrayBase.prototype.destroy.call(this), this._gl.deleteBuffer(this._indexBuffer), this._uint16Allocator.release(this._indexData)
        }, b.prototype.numVerts = function() {
            return this._numVerts
        }, b.prototype.maxVerts = function() {
            return this._maxVerts
        }, b.prototype.numIndices = function() {
            return 3 * this._numTriangles
        }, b.prototype.addVertex = function(a, b, c, d) {
            var e = this._numVerts * this._FLOATS_PER_VERT;
            this._vertData[e++] = a[0], this._vertData[e++] = a[1], this._vertData[e++] = a[2], this._vertData[e++] = b[0], this._vertData[e++] = b[1], this._vertData[e++] = b[2], this._vertData[e++] = c[0], this._vertData[e++] = c[1], this._vertData[e++] = c[2], this._vertData[e++] = c[3], this._vertData[e++] = d, this._numVerts += 1, this._ready = !1
        }, b.prototype._FLOATS_PER_VERT = 11, b.prototype._OBJID_OFFSET = 10, b.prototype._COLOR_OFFSET = 6, b.prototype._NORMAL_OFFSET = 3, b.prototype._POS_OFFSET = 0, b.prototype.addTriangle = function(a, b, c) {
            var d = 3 * this._numTriangles;
            d >= this._indexData.length || (this._indexData[d++] = a, this._indexData[d++] = b, this._indexData[d++] = c, this._numTriangles += 1, this._ready = !1)
        }, b.prototype.bindBuffers = function() {
            var a = this._ready;
            VertexArrayBase.prototype.bindBuffers.call(this), this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer), a || this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, this._indexData, this._gl.STATIC_DRAW)
        }, b.prototype.bindAttribs = function(a) {
            this._gl.enableVertexAttribArray(a.posAttrib), this._gl.vertexAttribPointer(a.posAttrib, 3, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._POS_OFFSET), -1 !== a.normalAttrib && (this._gl.enableVertexAttribArray(a.normalAttrib), this._gl.vertexAttribPointer(a.normalAttrib, 3, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._NORMAL_OFFSET)), -1 !== a.colorAttrib && (this._gl.vertexAttribPointer(a.colorAttrib, 4, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._COLOR_OFFSET), this._gl.enableVertexAttribArray(a.colorAttrib)), -1 !== a.objIdAttrib && (this._gl.vertexAttribPointer(a.objIdAttrib, 1, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._OBJID_OFFSET), this._gl.enableVertexAttribArray(a.objIdAttrib))
        }, b.prototype.releaseAttribs = function(a) {
            this._gl.disableVertexAttribArray(a.posAttrib), -1 !== a.colorAttrib && this._gl.disableVertexAttribArray(a.colorAttrib), -1 !== a.normalAttrib && this._gl.disableVertexAttribArray(a.normalAttrib), -1 !== a.objIdAttrib && this._gl.disableVertexAttribArray(a.objIdAttrib)
        }, b.prototype.bind = function(a) {
            this.bindBuffers(), this.bindAttribs(a)
        }, b.prototype.draw = function() {
            this._gl.drawElements(this._gl.TRIANGLES, 3 * this._numTriangles, this._gl.UNSIGNED_SHORT, 0)
        }, a.IndexedVertexArray = b, !0
    }(this),
    function(a) {
        "use strict";

        function b(a, b, c) {
            VertexArrayBase.prototype.constructor.call(this, a, b, c), this._numLines = 0
        }
        return derive(b, VertexArrayBase), b.prototype._FLOATS_PER_VERT = 8, b.prototype._POS_OFFSET = 0, b.prototype._COLOR_OFFSET = 3, b.prototype._ID_OFFSET = 7, b.prototype.numVerts = function() {
            return 2 * this._numLines
        }, b.prototype.addLine = function(a, b, c, d, e, f) {
            var g = this._FLOATS_PER_VERT * this._numLines * 2;
            this._vertData[g++] = a[0], this._vertData[g++] = a[1], this._vertData[g++] = a[2], this._vertData[g++] = b[0], this._vertData[g++] = b[1], this._vertData[g++] = b[2], this._vertData[g++] = b[3], this._vertData[g++] = e, this._vertData[g++] = c[0], this._vertData[g++] = c[1], this._vertData[g++] = c[2], this._vertData[g++] = d[0], this._vertData[g++] = d[1], this._vertData[g++] = d[2], this._vertData[g++] = d[3], this._vertData[g++] = f, this._numLines += 1, this._ready = !1, this._boundingSpehre = null
        }, b.prototype.bindAttribs = function(a) {
            this._gl.vertexAttribPointer(a.posAttrib, 3, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._POS_OFFSET), this._gl.vertexAttribPointer(a.colorAttrib, 4, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._COLOR_OFFSET), this._gl.enableVertexAttribArray(a.colorAttrib), this._gl.enableVertexAttribArray(a.posAttrib), -1 !== a.objIdAttrib && (this._gl.vertexAttribPointer(a.objIdAttrib, 1, this._gl.FLOAT, !1, 4 * this._FLOATS_PER_VERT, 4 * this._ID_OFFSET), this._gl.enableVertexAttribArray(a.objIdAttrib))
        }, b.prototype.releaseAttribs = function(a) {
            this._gl.disableVertexAttribArray(a.posAttrib), this._gl.disableVertexAttribArray(a.colorAttrib), -1 !== a.objIdAttrib && this._gl.disableVertexAttribArray(a.objIdAttrib)
        }, b.prototype.bind = function(a) {
            this.bindBuffers(), this.bindAttribs(a)
        }, b.prototype.draw = function() {
            this._gl.drawArrays(this._gl.LINES, 0, 2 * this._numLines)
        }, a.VertexArray = b, !0
    }(this),
    function(a) {
        "use strict";

        function b(a, b, c, d) {
            VertexArray.prototype.constructor.call(this, b, c, d), this._chain = a
        }

        function c(a, b, c, d, e, f) {
            IndexedVertexArray.prototype.constructor.call(this, b, c, d, e, f), this._chain = a
        }
        return derive(b, VertexArray), b.prototype.chain = function() {
            return this._chain
        }, c.prototype.chain = function() {
            return this._chain
        }, b.prototype.drawSymmetryRelated = function(a, b, c) {
            this.bind(b);
            for (var d = 0; d < c.length; ++d) this._gl.uniform1i(b.symId, d), a.bind(b, c[d]), this.draw();
            this.releaseAttribs(b)
        }, derive(c, IndexedVertexArray), c.prototype.drawSymmetryRelated = b.prototype.drawSymmetryRelated, a.LineChainData = b, a.MeshChainData = c, !0
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            this._arcs = b, this._stacks = a, this._indices = new Uint16Array(3 * b * a * 2), this._verts = new Float32Array(3 * b * a);
            var c, d, e = Math.PI / (a - 1),
                f = 2 * Math.PI / b;
            for (c = 0; c < this._stacks; ++c) {
                var g = Math.sin(c * e),
                    h = Math.cos(c * e);
                for (d = 0; d < this._arcs; ++d) {
                    var i = g * Math.cos(d * f),
                        j = g * Math.sin(d * f);
                    this._verts[3 * (d + c * this._arcs)] = i, this._verts[3 * (d + c * this._arcs) + 1] = j, this._verts[3 * (d + c * this._arcs) + 2] = h
                }
            }
            var k = 0;
            for (c = 0; c < this._stacks - 1; ++c)
                for (d = 0; d < this._arcs; ++d) this._indices[k] = c * this._arcs + d, this._indices[k + 1] = c * this._arcs + (d + 1) % this._arcs, this._indices[k + 2] = (c + 1) * this._arcs + d, k += 3, this._indices[k] = c * this._arcs + (d + 1) % this._arcs, this._indices[k + 1] = (c + 1) * this._arcs + (d + 1) % this._arcs, this._indices[k + 2] = (c + 1) * this._arcs + d, k += 3
        }

        function c(a, b, c) {
            var d = geom.catmullRomSpline(a, a.length / 3, b, c, !0);
            this._indices = new Uint16Array(2 * d.length), this._verts = d, this._normals = new Float32Array(d.length), this._arcs = d.length / 3;
            for (var e = vec3.create(), f = (vec3.create(), 0); f < this._arcs; ++f) {
                var g = 0 === f ? this._arcs - 1 : f - 1,
                    h = f === this._arcs - 1 ? 0 : f + 1;
                e[0] = this._verts[3 * h + 1] - this._verts[3 * g + 1], e[1] = this._verts[3 * g] - this._verts[3 * h], vec3.normalize(e, e), this._normals[3 * f] = e[0], this._normals[3 * f + 1] = e[1], this._normals[3 * f + 2] = e[2]
            }
            for (f = 0; f < this._arcs; ++f) this._indices[6 * f] = f, this._indices[6 * f + 1] = f + this._arcs, this._indices[6 * f + 2] = (f + 1) % this._arcs + this._arcs, this._indices[6 * f + 3] = f, this._indices[6 * f + 4] = (f + 1) % this._arcs + this._arcs, this._indices[6 * f + 5] = (f + 1) % this._arcs
        }

        function d(a) {
            this._arcs = a, this._indices = new Uint16Array(3 * a * 2), this._verts = new Float32Array(3 * a * 2), this._normals = new Float32Array(3 * a * 2);
            for (var b = 2 * Math.PI / this._arcs, c = 0; c < this._arcs; ++c) {
                var d = Math.cos(b * c),
                    e = Math.sin(b * c);
                this._verts[3 * c] = d, this._verts[3 * c + 1] = e, this._verts[3 * c + 2] = -.5, this._verts[3 * a + 3 * c] = d, this._verts[3 * a + 3 * c + 1] = e, this._verts[3 * a + 3 * c + 2] = .5, this._normals[3 * c] = d, this._normals[3 * c + 1] = e, this._normals[3 * a + 3 * c] = d, this._normals[3 * a + 3 * c + 1] = e
            }
            for (c = 0; c < this._arcs; ++c) this._indices[6 * c] = c % this._arcs, this._indices[6 * c + 1] = a + (c + 1) % this._arcs, this._indices[6 * c + 2] = (c + 1) % this._arcs, this._indices[6 * c + 3] = c % this._arcs, this._indices[6 * c + 4] = a + c % this._arcs, this._indices[6 * c + 5] = a + (c + 1) % this._arcs
        }
        b.prototype.addTransformed = function() {
            var a = vec3.create(),
                b = vec3.create();
            return function(c, d, e, f, g) {
                for (var h = c.numVerts(), i = 0; i < this._stacks * this._arcs; ++i) vec3.set(b, this._verts[3 * i], this._verts[3 * i + 1], this._verts[3 * i + 2]), vec3.copy(a, b), vec3.scale(a, a, e), vec3.add(a, a, d), c.addVertex(a, b, f, g);
                for (i = 0; i < this._indices.length / 3; ++i) c.addTriangle(h + this._indices[3 * i], h + this._indices[3 * i + 1], h + this._indices[3 * i + 2])
            }
        }(), b.prototype.numIndices = function() {
            return this._indices.length
        }, b.prototype.numVerts = function() {
            return this._verts.length / 3
        }, c.prototype.addTransformed = function() {
            var a = vec3.create(),
                b = vec3.create();
            return function(c, d, e, f, g, h, i, j) {
                for (var k = c.numVerts() - this._arcs, l = 0; l < this._arcs; ++l) vec3.set(a, e * this._verts[3 * l], e * this._verts[3 * l + 1], 0), vec3.transformMat3(a, a, f), vec3.add(a, a, d), vec3.set(b, this._normals[3 * l], this._normals[3 * l + 1], 0), vec3.transformMat3(b, b, f), c.addVertex(a, b, g, j);
                if (!h)
                    if (0 !== i)
                        for (l = 0; l < this._arcs; ++l) c.addTriangle(k + (l + i) % this._arcs, k + l + this._arcs, k + (l + 1) % this._arcs + this._arcs), c.addTriangle(k + (l + i) % this._arcs, k + (l + 1) % this._arcs + this._arcs, k + (l + 1 + i) % this._arcs);
                    else
                        for (l = 0; l < this._indices.length / 3; ++l) c.addTriangle(k + this._indices[3 * l], k + this._indices[3 * l + 1], k + this._indices[3 * l + 2])
            }
        }(), d.prototype.numVerts = function() {
            return this._verts.length / 3
        }, d.prototype.numIndices = function() {
            return this._indices.length
        }, d.prototype.addTransformed = function() {
            var a = vec3.create(),
                b = vec3.create();
            return function(c, d, e, f, g, h, i, j, k) {
                for (var l = c.numVerts(), m = 0; m < 2 * this._arcs; ++m) {
                    vec3.set(a, f * this._verts[3 * m], f * this._verts[3 * m + 1], e * this._verts[3 * m + 2]), vec3.transformMat3(a, a, g), vec3.add(a, a, d), vec3.set(b, this._normals[3 * m], this._normals[3 * m + 1], this._normals[3 * m + 2]), vec3.transformMat3(b, b, g);
                    var n = m < this._arcs ? j : k;
                    c.addVertex(a, b, m < this._arcs ? h : i, n)
                }
                for (m = 0; m < this._indices.length / 3; ++m) c.addTriangle(l + this._indices[3 * m], l + this._indices[3 * m + 1], l + this._indices[3 * m + 2])
            }
        }(), a.TubeProfile = c, a.ProtoSphere = b, a.ProtoCylinder = d
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            void 0 === a || void 0 === b ? (this._empty = !0, this._min = this._max = null) : (this._empty = !1, this._min = a, this._max = b)
        }

        function c(a) {
            this._children = [], this._visible = !0, this._name = a || "", this._order = 1
        }

        function d(a) {
            c.prototype.constructor.call(this, a), this._gl = a, this._idRanges = [], this._showRelated = null
        }

        function e(a, b) {
            d.prototype.constructor.call(this, a), this._vertArrays = [], this._float32Allocator = b, this._vertAssoc = null, this._lineWidth = 1
        }

        function f(a, b, c) {
            d.prototype.constructor.call(this, a), this._indexedVertArrays = [], this._float32Allocator = b, this._uint16Allocator = c, this._remainingVerts = null, this._remainingIndices = null, this._vertAssoc = null
        }

        function g(a, b, d, e, f) {
            c.prototype.constructor.call(this, a), this._gl = a, this._order = 100, this._pos = e, this._interleavedBuffer = this._gl.createBuffer(), this._interleavedData = new Float32Array(30), this._prepareText(b, d, f);
            var g = this._width / 2,
                h = this._height / 2;
            this._interleavedData[0] = e[0], this._interleavedData[1] = e[1], this._interleavedData[2] = e[2], this._interleavedData[3] = -g, this._interleavedData[4] = -h, this._interleavedData[5] = e[0], this._interleavedData[6] = e[1], this._interleavedData[7] = e[2], this._interleavedData[8] = g, this._interleavedData[9] = h, this._interleavedData[10] = e[0], this._interleavedData[11] = e[1], this._interleavedData[12] = e[2], this._interleavedData[13] = g, this._interleavedData[14] = -h, this._interleavedData[15] = e[0], this._interleavedData[16] = e[1], this._interleavedData[17] = e[2], this._interleavedData[18] = -g, this._interleavedData[19] = -h, this._interleavedData[20] = e[0], this._interleavedData[21] = e[1], this._interleavedData[22] = e[2], this._interleavedData[23] = -g, this._interleavedData[24] = h, this._interleavedData[25] = e[0], this._interleavedData[26] = e[1], this._interleavedData[27] = e[2], this._interleavedData[28] = g, this._interleavedData[29] = h
        }

        function h(a) {
            for (var b = 1; a > b;) b *= 2;
            return b
        }

        function i(a, b, c) {
            this._pool = a, this._start = b, this._next = b, this._end = c
        }

        function j() {
            this._objects = {}, this._unusedRangeStart = 0, this._free = []
        }

        function k(a, b, c, d, f) {
            e.prototype.constructor.call(this, a, 24, d, f);
            var g = rgb.fromValues(1, 0, 0),
                h = rgb.fromValues(0, 1, 0),
                i = rgb.fromValues(0, 0, 1),
                j = mat3.create();
            j[0] = c[0][0], j[1] = c[0][1], j[2] = c[0][2], j[3] = c[1][0], j[4] = c[1][1], j[5] = c[1][2], j[6] = c[2][0], j[7] = c[2][1], j[8] = c[2][2];
            var k = vec3.create(),
                l = vec3.create();
            this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, -1, -1], j)), g, vec3.add(l, b, vec3.transformMat3(l, [1, -1, -1], j)), g, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, -1, -1], j)), h, vec3.add(l, b, vec3.transformMat3(l, [1, 1, -1], j)), h, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, 1, -1], j)), g, vec3.add(l, b, vec3.transformMat3(l, [-1, 1, -1], j)), g, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, 1, -1], j)), h, vec3.add(l, b, vec3.transformMat3(l, [-1, -1, -1], j)), h, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, -1, 1], j)), g, vec3.add(l, b, vec3.transformMat3(l, [1, -1, 1], j)), g, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, -1, 1], j)), h, vec3.add(l, b, vec3.transformMat3(l, [1, 1, 1], j)), h, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, 1, 1], j)), g, vec3.add(l, b, vec3.transformMat3(l, [-1, 1, 1], j)), g, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, 1, 1], j)), h, vec3.add(l, b, vec3.transformMat3(l, [-1, -1, 1], j)), h, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, -1, -1], j)), i, vec3.add(l, b, vec3.transformMat3(l, [-1, -1, 1], j)), i, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, -1, -1], j)), i, vec3.add(l, b, vec3.transformMat3(l, [1, -1, 1], j)), i, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [1, 1, -1], j)), i, vec3.add(l, b, vec3.transformMat3(l, [1, 1, 1], j)), i, -1), this.addLine(vec3.add(k, b, vec3.transformMat3(k, [-1, 1, -1], j)), i, vec3.add(l, b, vec3.transformMat3(l, [-1, 1, 1], j)), i, -1)
        }
        b.prototype.min = function() {
            return this._min
        }, b.prototype.max = function() {
            return this._max
        }, b.prototype.length = function() {
            return this._max - this._min
        }, b.prototype.empty = function() {
            return this._empty
        }, b.prototype.center = function() {
            return .5 * (this._max + this._min)
        }, b.prototype.extend = function(a) {
            this._min -= a, this._max += a
        }, b.prototype.update = function(a) {
            return this._empty ? (this._min = this._max = a, this._empty = !1, void 0) : (a < this._min ? this._min = a : a > this._max && (this._max = a), void 0)
        }, c.prototype.order = function(a) {
            return void 0 !== a && (this._order = a), this._order
        }, c.prototype.add = function(a) {
            this._children.push(a)
        }, c.prototype.draw = function(a, b, c, d) {
            for (var e = 0, f = this._children.length; e !== f; ++e) this._children[e].draw(a, b, c, d)
        }, c.prototype.show = function() {
            this._visible = !0
        }, c.prototype.hide = function() {
            this._visible = !1
        }, c.prototype.name = function(a) {
            return void 0 !== a && (this._name = a), this._name
        }, c.prototype.destroy = function() {
            for (var a = 0; a < this._children.length; ++a) this._children[a].destroy()
        }, c.prototype.visible = function() {
            return this._visible
        }, derive(d, c), d.prototype.setShowRelated = function(a) {
            return this._showRelated = a, a
        }, d.prototype.symWithIndex = function(a) {
            if ("asym" === this.showRelated()) return null;
            var b = this.structure().assembly(this.showRelated());
            if (!b) return null;
            for (var c = b.generators(), d = 0; d < c.length; ++d) {
                if (c[d].matrices().length > a) return c[d].matrix(a);
                a -= c[d].matrices().length
            }
            return null
        }, d.prototype.showRelated = function() {
            return this._showRelated
        }, d.prototype.select = function(a) {
            return this.structure().select(a)
        }, d.prototype.structure = function() {
            return this._vertAssoc._structure
        }, d.prototype.setVertAssoc = function(a) {
            this._vertAssoc = a
        }, d.prototype.getColorForAtom = function(a, b) {
            return this._vertAssoc.getColorForAtom(a, b)
        }, d.prototype.addIdRange = function(a) {
            this._idRanges.push(a)
        }, d.prototype.destroy = function() {
            c.prototype.destroy.call(this);
            for (var a = 0; a < this._idRanges.length; ++a) this._idRanges[a].recycle()
        }, d.prototype._vertArraysInvolving = function(a) {
            for (var b = this.vertArrays(), c = [], d = {}, e = 0; e < a.length; ++e) d[a[e]] = !0;
            for (var f = 0; f < b.length; ++f) d[b[f].chain()] === !0 && c.push(b[f]);
            return c
        }, d.prototype._drawSymmetryRelated = function(a, b, c) {
            for (var d = c.generators(), e = 0; e < d.length; ++e) {
                var f = d[e],
                    g = this._vertArraysInvolving(f.chains());
                this._drawVertArrays(a, b, g, f.matrices())
            }
        }, d.prototype._updateProjectionIntervalsAsym = function(a, b, c, d, e, f) {
            for (var g = this.vertArrays(), h = 0; h < g.length; ++h) g[h].updateProjectionIntervals(a, b, c, d, e, f)
        }, d.prototype.updateProjectionIntervals = function(a, b, c, d, e, f) {
            if (this._visible) {
                var g = this.showRelated();
                if ("asym" === g) return this._updateProjectionIntervalsAsym(a, b, c, d, e, f);
                var h = this.structure().assembly(g);
                if (!h) return this._updateProjectionIntervalsAsym(a, b, c, d, e, f);
                for (var i = h.generators(), j = 0; j < i.length; ++j)
                    for (var k = i[j], l = this._vertArraysInvolving(k.chains()), m = 0; m < k.matrices().length; ++m)
                        for (var n = 0; n < l.length; ++n) {
                            var o = k.matrix(m);
                            l[n].updateProjectionIntervals(a, b, c, d, e, f, o)
                        }
            }
        }, d.prototype._updateSquaredSphereRadiusAsym = function(a, b) {
            for (var c = this.vertArrays(), d = 0; d < c.length; ++d) b = c[d].updateSquaredSphereRadius(a, b);
            return b
        }, d.prototype.updateSquaredSphereRadius = function(a, b) {
            if (!this._visible) return b;
            var c = this.showRelated();
            if ("asym" === c) return this._updateSquaredSphereRadiusAsym(a, b);
            var d = this.structure().assembly(c);
            if (!d) return this._updateSquaredSphereRadiusAsym(a, b);
            for (var e = d.generators(), f = 0; f < e.length; ++f)
                for (var g = e[f], h = this._vertArraysInvolving(g.chains()), i = 0; i < g.matrices().length; ++i)
                    for (var j = 0; j < h.length; ++j) {
                        {
                            g.matrix(i)
                        }
                        b = h[j].updateSquaredSphereRadius(a, b)
                    }
            return b
        }, d.prototype.draw = function(a, b, c, d) {
            if (this._visible) {
                var e = this.shaderForStyleAndPass(b, c, d);
                if (e) {
                    var f = this.showRelated();
                    if ("asym" === f) return this._drawVertArrays(a, e, this.vertArrays(), null);
                    var g = this.structure().assembly(f);
                    return g ? this._drawSymmetryRelated(a, e, g) : this._drawVertArrays(a, e, this.vertArrays(), null)
                }
            }
        }, derive(e, d), e.prototype.addChainVertArray = function(a, b) {
            var c = new LineChainData(a.name(), this._gl, b, this._float32Allocator);
            return this._vertArrays.push(c), c
        }, e.prototype.setLineWidth = function(a) {
            this._lineWidth = a
        }, e.prototype.vertArrays = function() {
            return this._vertArrays
        }, e.prototype.shaderForStyleAndPass = function(a, b, c) {
            return "outline" === c ? null : "select" === c ? a.select : a.lines
        }, e.prototype.destroy = function() {
            d.prototype.destroy.call(this);
            for (var a = 0; a < this._vertArrays.length; ++a) this._vertArrays[a].destroy();
            this._vertArrays = []
        }, e.prototype._drawVertArrays = function(a, b, c, d) {
            this._gl.lineWidth(this._lineWidth);
            var e;
            if (d)
                for (e = 0; e < c.length; ++e) c[e].drawSymmetryRelated(a, b, d);
            else
                for (this._gl.uniform1i(b.symId, 255), a.bind(b), e = 0; e < c.length; ++e) c[e].bind(b), c[e].draw(), c[e].releaseAttribs(b)
        }, e.prototype.vertArray = function() {
            return this._va
        }, e.prototype.colorBy = function(a, b) {
            this._ready = !1, b = b || this.structure(), this._vertAssoc.recolor(a, b)
        }, e.prototype.setOpacity = function(a, b) {
            this._ready = !1, b = b || this.structure(), this._vertAssoc.setOpacity(a, b)
        }, f.prototype._boundedVertArraySize = function(a) {
            return Math.min(65536, a)
        }, f.prototype.addChainVertArray = function(a, b, c) {
            this._remainingVerts = b, this._remainingIndices = c;
            var d = new MeshChainData(a.name(), this._gl, this._boundedVertArraySize(b), c, this._float32Allocator, this._uint16Allocator);
            return this._indexedVertArrays.push(d), d
        }, f.prototype.addVertArray = function(a, b) {
            this._remainingVerts = a, this._remainingIndices = b;
            var c = new IndexedVertexArray(this._gl, this._boundedVertArraySize(a), b, this._float32Allocator, this._uint16Allocator);
            return this._indexedVertArrays.push(c), c
        }, f.prototype.vertArrayWithSpaceFor = function(a) {
            var b = this._indexedVertArrays[this._indexedVertArrays.length - 1],
                c = b.maxVerts() - b.numVerts();
            if (c >= a) return b;
            this._remainingVerts = this._remainingVerts - b.numVerts(), this._remainingIndices = this._remainingIndices - b.numIndices(), a = this._boundedVertArraySize(this._remainingVerts);
            var d = null;
            return d = b instanceof MeshChainData ? new MeshChainData(b.chain(), this._gl, a, this._remainingIndices, this._float32Allocator, this._uint16Allocator) : new IndexedVertexArray(this._gl, a, this._remainingIndices, this._float32Allocator, this._uint16Allocator), this._indexedVertArrays.push(d), d
        }, derive(f, d), f.prototype.setVertAssoc = function(a) {
            this._vertAssoc = a
        }, f.prototype.vertArray = function(a) {
            return this._indexedVertArrays[a]
        }, f.prototype.destroy = function() {
            d.prototype.destroy.call(this);
            for (var a = 0; a < this._indexedVertArrays.length; ++a) this._indexedVertArrays[a].destroy();
            this._indexedVertArrays = []
        }, f.prototype.numVerts = function() {
            return this._indexedVertArrays[0].numVerts()
        }, f.prototype.shaderForStyleAndPass = function(a, b, c) {
            if ("outline" === c) return a.outline;
            if ("select" === c) return a.select;
            var d = a[b];
            return void 0 !== d ? d : null
        }, f.prototype.colorBy = function(a, b) {
            this._ready = !1, b = b || this.structure(), this._vertAssoc.recolor(a, b)
        }, f.prototype.setOpacity = function(a, b) {
            this._ready = !1, b = b || this.structure(), this._vertAssoc.setOpacity(a, b)
        }, f.prototype._drawVertArrays = function(a, b, c, d) {
            var e;
            if (d)
                for (e = 0; e < c.length; ++e) c[e].drawSymmetryRelated(a, b, d);
            else
                for (a.bind(b), this._gl.uniform1i(b.symId, 255), e = 0; e < c.length; ++e) c[e].bind(b), c[e].draw(), c[e].releaseAttribs(b)
        }, f.prototype.vertArrays = function() {
            return this._indexedVertArrays
        }, f.prototype.addVertex = function(a, b, c, d) {
            var e = this._indexedVertArrays[0];
            e.addVertex(a, b, c, d)
        }, f.prototype.addTriangle = function(a, b, c) {
            var d = this._indexedVertArrays[0];
            d.addTriangle(a, b, c)
        }, g.prototype.updateProjectionIntervals = function() {}, derive(g, c), g.prototype._setupTextParameters = function(a) {
            a.fillStyle = "black", a.textAlign = "left", a.textBaseline = "bottom", a.font = "24px Verdana"
        }, g.prototype._prepareText = function(a, b, c) {
            this._setupTextParameters(b);
            var d = b.measureText(c).width,
                e = 24;
            a.width = h(d), a.height = h(e), this._setupTextParameters(b), b.strokeStyle = "black", b.lineWidth = .5, b.fillText(c, 0, a.height), b.strokeText(c, 0, a.height), this._texture = this._gl.createTexture(), this._textureFromCanvas(this._texture, a), this._xScale = d / a.width, this._yScale = e / a.height, this._width = .002 * d, this._height = .002 * e
        }, g.prototype._textureFromCanvas = function(a, b) {
            this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, !0), this._gl.bindTexture(this._gl.TEXTURE_2D, a), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, b), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR_MIPMAP_LINEAR), this._gl.generateMipmap(this._gl.TEXTURE_2D), this._gl.bindTexture(this._gl.TEXTURE_2D, null)
        }, g.prototype.bind = function() {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._interleavedBuffer), this._gl.activeTexture(this._gl.TEXTURE0), this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture), this._ready || (this._gl.bufferData(this._gl.ARRAY_BUFFER, this._interleavedData, this._gl.STATIC_DRAW), this._ready = !0)
        }, g.prototype.draw = function(a, b, c, d) {
            if (this._visible && "normal" === d) {
                var e = b.text;
                a.bind(e), this.bind(), this._gl.uniform1f(this._gl.getUniformLocation(e, "xScale"), this._xScale), this._gl.uniform1f(this._gl.getUniformLocation(e, "yScale"), this._yScale), this._gl.uniform1i(this._gl.getUniformLocation(e, "sampler"), 0);
                var f = this._gl.getAttribLocation(e, "attrCenter");
                this._gl.enableVertexAttribArray(f), this._gl.vertexAttribPointer(f, 3, this._gl.FLOAT, !1, 20, 0);
                var g = this._gl.getAttribLocation(e, "attrCorner");
                this._gl.vertexAttribPointer(g, 2, this._gl.FLOAT, !1, 20, 12), this._gl.enableVertexAttribArray(g), this._gl.enable(this._gl.BLEND), this._gl.blendFunc(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA), this._gl.drawArrays(this._gl.TRIANGLES, 0, 6), this._gl.disableVertexAttribArray(f), this._gl.disableVertexAttribArray(g), this._gl.disable(this._gl.BLEND)
            }
        }, i.prototype.nextId = function(a) {
            var b = this._next;
            return this._next++, this._pool._objects[b] = a, b
        }, i.prototype.recycle = function() {
            this._pool.recycle(this)
        }, i.prototype.length = function() {
            return this._end - this._start
        }, j.prototype.getContinuousRange = function(a) {
            for (var b = -1, c = null, d = 0; d < this._free.length; ++d) {
                var e = this._free[d],
                    f = e.length();
                f >= a && (null === c || c > f) && (c = f, b = d)
            }
            if (-1 !== b) {
                var g = this._free[b];
                return this._free.splice(b, 1), g
            }
            var h = this._unusedRangeStart,
                j = h + a;
            return j > 65536 ? null : (this._unusedRangeStart = j, new i(this, h, j))
        }, j.prototype.recycle = function(a) {
            for (var b = a._start; b < a._next; ++b) delete this._objects[b];
            a._next = a._start, this._free.push(a)
        }, j.prototype.objectForId = function(a) {
            return this._objects[a]
        }, derive(k, e), k.prototype.updateProjectionIntervals = function() {}, a.SceneNode = c, a.OrientedBoundingBox = k, a.AtomVertexAssoc = AtomVertexAssoc, a.TraceVertexAssoc = TraceVertexAssoc, a.MeshGeom = f, a.LineGeom = e, a.TextLabel = g, a.UniqueObjectIdPool = j, a.Range = b
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            this._chains = a || [], this._matrices = b || []
        }

        function c(a) {
            this._name = a, this._generators = []
        }
        return b.prototype.addChain = function(a) {
            this._chains.push(a)
        }, b.prototype.chains = function() {
            return this._chains
        }, b.prototype.addMatrix = function(a) {
            this._matrices.push(a)
        }, b.prototype.matrices = function() {
            return this._matrices
        }, b.prototype.matrix = function(a) {
            return this._matrices[a]
        }, c.prototype.name = function() {
            return this._name
        }, c.prototype.generators = function() {
            return this._generators
        }, c.prototype.generator = function(a) {
            return this._generators[a]
        }, c.prototype.addGenerator = function(a) {
            this._generators.push(a)
        }, a.SymGenerator = b, a.Assembly = c, !0
    }(this),
    function(a) {
        "use strict";

        function b(a) {
            var b = u[a.toUpperCase()];
            return void 0 !== b ? b : 1.5
        }

        function c(a, b) {
            return a << 8 | b.charCodeAt(0)
        }

        function d() {}

        function e(a, b) {
            for (var c = 0; c < b.length; ++c)
                if (!b[c](a)) return !1;
            return !0
        }

        function f(a, b) {
            return a.num() < b.num()
        }

        function g(a) {
            return {
                num: function() {
                    return a
                }
            }
        }

        function h() {}

        function i() {}

        function j() {}

        function k(a) {
            d.prototype.constructor.call(this), this._chains = [], this._assemblies = [], this._pv = a, this._nextAtomIndex = 0
        }

        function l(a, b) {
            h.prototype.constructor.call(this), this._structure = a, this._name = b, this._cachedTraces = [], this._residues = [], this._rnumsOrdered = !0
        }

        function m(a, b, c, d) {
            i.prototype.constructor.call(this), this._name = b, this._num = c, this._insCode = d, this._atoms = [], this._ss = "C", this._chain = a, this._index = a.residues().length
        }

        function n(a, b, c, d, e) {
            j.prototype.constructor.call(this), this._residue = a, this._bonds = [], this._name = b, this._pos = c, this._index = e, this._element = d
        }

        function o(a) {
            d.prototype.constructor.call(this), this._mol = a, this._chains = []
        }

        function p(a, b) {
            h.prototype.constructor.call(this), this._chain = b, this._residues = [], this._molView = a, this._residueMap = {}
        }

        function q(a, b) {
            i.prototype.constructor.call(this), this._chainView = a, this._atoms = [], this._residue = b
        }

        function r(a, b) {
            j.prototype.constructor.call(this), this._resView = a, this._atom = b, this._bonds = []
        }

        function s(a) {
            for (var b = 0; b < a.length(); ++b) x(a, b) ? a.residueAt(b).setSS("H") : y(a, b) ? a.residueAt(b).setSS("E") : a.residueAt(b).setSS("C")
        }

        function t(a) {
            for (var b = a.chains(), c = 0; c < b.length; ++c) {
                var d = b[c];
                d.eachBackboneTrace(s)
            }
        }
        var u = {
            H: .31,
            HE: .28,
            LI: 1.28,
            BE: .96,
            B: .84,
            C: .76,
            N: .71,
            O: .66,
            F: .57,
            NE: .58,
            NA: 1.66,
            MG: 1.41,
            AL: 1.21,
            SI: 1.11,
            P: 1.07,
            S: 1.05,
            CL: 1.02,
            AR: 1.06,
            K: 2.03,
            CA: 1.76,
            SC: 1.7,
            TI: 1.6,
            V: 1.53,
            CR: 1.39,
            MN: 1.39,
            FE: 1.32,
            CO: 1.26,
            NI: 1.24,
            CU: 1.32,
            ZN: 1.22,
            GA: 1.22,
            GE: 1.2,
            AS: 1.19,
            SE: 1.2,
            BR: 1.2,
            KR: 1.16,
            RB: 2.2,
            SR: 1.95,
            Y: 1.9,
            ZR: 1.75,
            NB: 1.64,
            MO: 1.54,
            TC: 1.47,
            RU: 1.46,
            RH: 1.42,
            PD: 1.39,
            AG: 1.45,
            CD: 1.44,
            IN: 1.42,
            SN: 1.39,
            SB: 1.39,
            TE: 1.38,
            I: 1.39,
            XE: 1.4,
            CS: 2.44,
            BA: 2.15,
            LA: 2.07,
            CE: 2.04,
            PR: 2.03,
            ND: 2.01,
            PM: 1.99,
            SM: 1.98,
            EU: 1.98,
            GD: 1.96,
            TB: 1.94,
            DY: 1.92,
            HO: 1.92,
            ER: 1.89,
            TM: 1.9,
            YB: 1.87,
            LU: 1.87,
            HF: 1.75,
            TA: 1.7,
            W: 1.62,
            RE: 1.51,
            OS: 1.44,
            IR: 1.41,
            PT: 1.36,
            AU: 1.36,
            HG: 1.32,
            TL: 1.45,
            PB: 1.46,
            BI: 1.48,
            PO: 1.4,
            AT: 1.5,
            RN: 1.5,
            FR: 2.6,
            RA: 2.21,
            AC: 2.15,
            TH: 2.06,
            PA: 2,
            U: 1.96,
            NP: 1.9,
            PU: 1.87,
            AM: 1.8,
            CM: 1.69
        };
        d.prototype.eachResidue = function(a) {
            for (var b = 0; b < this._chains.length; b += 1)
                if (this._chains[b].eachResidue(a) === !1) return !1
        }, d.prototype.eachAtom = function(a, b) {
            b |= 0;
            for (var c = 0; c < this._chains.length; c += 1)
                if (b = this._chains[c].eachAtom(a, b), b === !1) return !1
        }, d.prototype.residueCount = function() {
            for (var a = this.chains(), b = 0, c = 0; c < a.length; ++c) b += a[c].residues().length;
            return b
        }, d.prototype.eachChain = function(a) {
            for (var b = this.chains(), c = 0; c < b.length; ++c)
                if (a(b[c]) === !1) return
        }, d.prototype.atomCount = function() {
            for (var a = this.chains(), b = 0, c = 0; c < a.length; ++c) b += a[c].atomCount();
            return b
        }, d.prototype.atoms = function() {
            var a = [];
            return this.eachAtom(function(b) {
                a.push(b)
            }), a
        }, d.prototype.atom = function(a) {
            var b = a.split("."),
                c = this.chain(b[0]);
            if (null === c) return null;
            var d = c.residueByRnum(parseInt(b[1], 10));
            return null === d ? null : d.atom(b[2])
        }, d.prototype.center = function() {
            var a = vec3.create(),
                b = 0;
            return this.eachAtom(function(c) {
                vec3.add(a, a, c.pos()), b += 1
            }), b && vec3.scale(a, a, 1 / b), a
        }, d.prototype.boundingSphere = function() {
            var a = this.center(),
                b = 0;
            return this.eachAtom(function(c) {
                b = Math.max(b, vec3.sqrDist(a, c.pos()))
            }), new Sphere(a, b)
        }, d.prototype.backboneTraces = function() {
            for (var a = this.chains(), b = [], c = 0; c < a.length; ++c) Array.prototype.push.apply(b, a[c].backboneTraces());
            return b
        }, d.prototype.select = function(a) {
            return "protein" === a ? this.residueSelect(function(a) {
                return a.isAminoacid()
            }) : "water" === a ? this.residueSelect(function(a) {
                return a.isWater()
            }) : "ligand" === a ? this.residueSelect(function(a) {
                return !a.isAminoacid() && !a.isWater()
            }) : this._dictSelect(a)
        }, d.prototype.selectWithin = function() {
            var a = vec3.create();
            return function(b, c) {
                c = c || {};
                var d = c.radius || 4,
                    e = d * d,
                    f = !!c.matchResidues,
                    g = [];
                b.eachAtom(function(a) {
                    g.push(a)
                });
                for (var h = new o(this.full()), i = null, j = null, k = this.chains(), l = !1, m = 0; m < k.length; ++m) {
                    var n = k[m].residues();
                    j = null;
                    for (var p = 0; p < n.length; ++p) {
                        i = null, l = !1;
                        for (var q = n[p].atoms(), r = 0; r < q.length && !l; ++r)
                            for (var s = 0; s < g.length; ++s)
                                if (vec3.sub(a, q[r].pos(), g[s].pos()), !(vec3.sqrLen(a) > e)) {
                                    if (j || (j = h.addChain(k[m].full(), !1)), i || (i = j.addResidue(n[p].full(), f)), f) {
                                        l = !0;
                                        break
                                    }
                                    i.addAtom(q[r].full())
                                }
                    }
                }
                return h
            }
        }(), d.prototype.residueSelect = function(a) {
            for (var b = new o(this.full()), c = 0; c < this._chains.length; ++c)
                for (var d = this._chains[c], e = null, f = d.residues(), g = 0; g < f.length; ++g) a(f[g]) && (e || (e = b.addChain(d, !1)), e.addResidue(f[g], !0));
            return b
        }, d.prototype._atomPredicates = function(a) {
            var b = [];
            return void 0 !== a.aname && b.push(function(b) {
                return b.name() === a.aname
            }), void 0 !== a.anames && b.push(function(b) {
                for (var c = b.name(), d = 0; d < a.anames.length; ++d)
                    if (c === a.anames[d]) return !0;
                return !1
            }), b
        }, d.prototype._residuePredicates = function(a) {
            var b = [];
            if (void 0 !== a.rname && b.push(function(b) {
                    return b.name() === a.rname
                }), void 0 !== a.rnames && b.push(function(b) {
                    for (var c = b.name(), d = 0; d < a.rnames.length; ++d)
                        if (c === a.rnames[d]) return !0;
                    return !1
                }), void 0 !== a.rnums) {
                for (var c = {}, d = 0; d < a.rnums.length; ++d) c[a.rnums[d]] = !0;
                b.push(function(a) {
                    var b = a.num();
                    return c[b] === !0
                })
            }
            return b
        }, d.prototype._chainPredicates = function(a) {
            var b = [];
            return void 0 !== a.cname && (a.chain = a.cname), void 0 !== a.cnames && (a.chains = a.cnames), void 0 !== a.chain && b.push(function(b) {
                return b.name() === a.chain
            }), void 0 !== a.chains && b.push(function(b) {
                for (var c = b.name(), d = 0; d < a.chains.length; ++d)
                    if (c === a.chains[d]) return !0;
                return !1
            }), b
        }, d.prototype._dictSelect = function(a) {
            for (var b = new o(this), c = this._residuePredicates(a), d = this._atomPredicates(a), f = this._chainPredicates(a), g = 0; g < this._chains.length; ++g) {
                var h = this._chains[g];
                if (e(h, f)) {
                    var i = null,
                        j = h.residues();
                    a.rindex && (a.rindices = [a.rindex]), a.rnumRange && (j = h.residuesInRnumRange(a.rnumRange[0], a.rnumRange[1]));
                    var k, l, m = [];
                    if (void 0 !== a.rindexRange) {
                        for (k = a.rindexRange[0], l = Math.min(j.length, a.rindexRange[1]); l > k; ++k) m.push(j[k]);
                        j = m
                    } else if (a.rindices && void 0 !== a.rindices.length) {
                        for (m = [], k = 0; k < a.rindices.length; ++k) m.push(j[a.rindices[k]]);
                        j = m
                    }
                    for (var n = 0; n < j.length; ++n)
                        if (e(j[n], c)) {
                            i || (i = b.addChain(h, !1));
                            for (var p = null, q = j[n].atoms(), r = 0; r < q.length; ++r) e(q[r], d) && (p || (p = i.addResidue(j[n], !1)), p.addAtom(q[r]))
                        }
                }
            }
            return b
        }, d.prototype.assembly = function(a) {
            for (var b = this.assemblies(), c = 0; c < b.length; ++c)
                if (b[c].name() === a) return b[c];
            return null
        }, h.prototype.eachAtom = function(a, b) {
            b |= 0;
            for (var c = 0; c < this._residues.length; c += 1)
                if (b = this._residues[c].eachAtom(a, b), b === !1) return !1;
            return b
        }, h.prototype.atomCount = function() {
            for (var a = 0, b = this.residues(), c = 0; c < b.length; ++c) a += b[c].atoms().length;
            return a
        }, h.prototype.eachResidue = function(a) {
            for (var b = 0; b < this._residues.length; b += 1)
                if (a(this._residues[b]) === !1) return !1
        }, h.prototype.residues = function() {
            return this._residues
        }, h.prototype.structure = function() {
            return this._structure
        }, h.prototype.asView = function() {
            var a = new o(this.structure().full());
            return a.addChain(this, !0), a
        }, h.prototype.residueByRnum = function(a) {
            var b = this.residues();
            if (this._rnumsOrdered) {
                var c = binarySearch(b, g(a), f);
                return -1 === c ? null : b[c]
            }
            for (var d = 0; d < b.length; ++d)
                if (b[d].num() === a) return b[d];
            return null
        }, h.prototype.prop = function(a) {
            return this[a]()
        }, i.prototype.prop = function(a) {
            return this[a]()
        }, i.prototype.isWater = function() {
            return "HOH" === this.name() || "DOD" === this.name()
        }, i.prototype.eachAtom = function(a, b) {
            b |= 0;
            for (var c = 0; c < this._atoms.length; c += 1) {
                if (a(this._atoms[c], b) === !1) return !1;
                b += 1
            }
            return b
        }, i.prototype.qualifiedName = function() {
            return this.chain().name() + "." + this.name() + this.num()
        }, i.prototype.atom = function(a) {
            if ("string" == typeof a)
                for (var b = 0; b < this._atoms.length; ++b)
                    if (this._atoms[b].name() === a) return this._atoms[b];
            return this._atoms[a]
        }, i.prototype.center = function() {
            var a = 0,
                b = vec3.create();
            return this.eachAtom(function(c) {
                vec3.add(b, b, c.pos()), a += 1
            }), a > 0 && vec3.scale(b, b, 1 / a), b
        }, i.prototype.isAminoacid = function() {
            return this.atom("N") && this.atom("CA") && this.atom("C") && this.atom("O")
        }, j.prototype.name = function() {
            return this._name
        }, j.prototype.pos = function() {
            return this._pos
        }, j.prototype.element = function() {
            return this._element
        }, j.prototype.index = function() {
            return this._index
        }, j.prototype.prop = function(a) {
            return this[a]()
        }, j.prototype.bondCount = function() {
            return this.bonds().length
        }, j.prototype.eachBond = function(a) {
            for (var b = this.bonds(), c = 0, d = b.length; d > c; ++c) a(b[c])
        }, derive(k, d), k.prototype.addAssembly = function(a) {
            this._assemblies.push(a)
        }, k.prototype.setAssemblies = function(a) {
            this._assemblies = a
        }, k.prototype.assemblies = function() {
            return this._assemblies
        }, k.prototype.chains = function() {
            return this._chains
        }, k.prototype.full = function() {
            return this
        }, k.prototype.containsResidue = function(a) {
            return a.full().structure() === this
        }, k.prototype.chain = function(a) {
            for (var b = 0; b < this._chains.length; ++b)
                if (this._chains[b].name() === a) return this._chains[b];
            return null
        }, k.prototype.nextAtomIndex = function() {
            var a = this._nextAtomIndex;
            return this._nextAtomIndex += 1, a
        }, k.prototype.addChain = function(a) {
            var b = new l(this, a);
            return this._chains.push(b), b
        }, k.prototype.connect = function(a, b) {
            var c = new v(a, b);
            return a.addBond(c), b.addBond(c), c
        }, k.prototype.deriveConnectivity = function() {
            var a, c = this;
            this.eachResidue(function(d) {
                for (var e, f = (vec3.create(), 0); f < d.atoms().length; f += 1)
                    for (var g = d.atom(f), h = b(g.element()), i = 0; f > i; i += 1) {
                        var j = d.atom(i),
                            k = b(j.element());
                        e = vec3.sqrDist(g.pos(), j.pos());
                        var l = h + k - .3,
                            m = h + k + .3;
                        m * m > e && e > l * l && c.connect(d.atom(f), d.atom(i))
                    }
                if (a) {
                    var n = a.atom("C"),
                        o = d.atom("N");
                    n && o && (e = vec3.sqrDist(n.pos(), o.pos()), 1.6 * 1.6 > e && c.connect(o, n))
                }
                a = d
            })
        }, derive(l, h), l.prototype.name = function() {
            return this._name
        }, l.prototype.full = function() {
            return this
        }, l.prototype.addResidue = function(a, b, d) {
            d = d || "\x00";
            var e = new m(this, a, b, d);
            if (this._residues.length > 0 && this._rnumsOrdered) {
                var f = c(b, d),
                    g = this._residues[this._residues.length - 1],
                    h = c(g.num(), g.insCode());
                this._rnumsOrdered = f > h
            }
            return this._residues.push(e), e
        }, l.prototype.residuesInRnumRange = function(a, b) {
            var c, d, e = [];
            if (this._rnumsOrdered === !0) {
                var h = indexFirstLargerEqualThan(this._residues, g(a), f);
                if (-1 === h) return e;
                var i = indexLastSmallerEqualThan(this._residues, g(b), f);
                if (-1 === i) return e;
                for (c = h; i >= c; ++c) e.push(this._residues[c])
            } else
                for (c = 0, d = this._residues.length; c !== d; ++c) {
                    var j = this._residues[c];
                    j.num() >= a && j.num() <= b && e.push(j)
                }
            return e
        }, l.prototype.assignSS = function(a, b, d) {
            for (var e = c(a[0], a[1]), f = c(b[0], b[1]), g = 1; g < this._residues.length - 1; ++g) {
                var h = this._residues[g],
                    i = c(h.num(), h.insCode());
                e >= i || i >= f || h.setSS(d)
            }
        }, l.prototype.eachBackboneTrace = function(a) {
            this._cacheBackboneTraces();
            for (var b = 0; b < this._cachedTraces.length; ++b) a(this._cachedTraces[b])
        }, l.prototype._cacheBackboneTraces = function() {
            if (!(this._cachedTraces.length > 0)) {
                for (var a = new BackboneTrace, b = 0; b < this._residues.length; b += 1) {
                    var c = this._residues[b];
                    if (c.isAminoacid())
                        if (0 !== a.length()) {
                            var d = this._residues[b - 1].atom("C"),
                                e = c.atom("N");
                            Math.abs(vec3.sqrDist(d.pos(), e.pos()) - 2.25) < 1 ? a.push(c) : a.length() > 1 && (this._cachedTraces.push(a), a = new BackboneTrace)
                        } else a.push(c);
                    else a.length() > 1 && this._cachedTraces.push(a), a = new BackboneTrace
                }
                a.length() > 1 && this._cachedTraces.push(a)
            }
        }, l.prototype.backboneTraces = function() {
            var a = [];
            return this.eachBackboneTrace(function(b) {
                a.push(b)
            }), a
        }, derive(m, i), m.prototype.name = function() {
            return this._name
        }, m.prototype.insCode = function() {
            return this._insCode
        }, m.prototype.num = function() {
            return this._num
        }, m.prototype.full = function() {
            return this
        }, m.prototype.addAtom = function(a, b, c) {
            var d = new n(this, a, b, c, this.structure().nextAtomIndex());
            return this._atoms.push(d), d
        }, m.prototype.ss = function() {
            return this._ss
        }, m.prototype.setSS = function(a) {
            this._ss = a
        }, m.prototype.index = function() {
            return this._index
        }, m.prototype.atoms = function() {
            return this._atoms
        }, m.prototype.chain = function() {
            return this._chain
        }, m.prototype.structure = function() {
            return this._chain.structure()
        }, derive(n, j), n.prototype.addBond = function(a) {
            this._bonds.push(a)
        }, n.prototype.name = function() {
            return this._name
        }, n.prototype.bonds = function() {
            return this._bonds
        }, n.prototype.residue = function() {
            return this._residue
        }, n.prototype.structure = function() {
            return this._residue.structure()
        }, n.prototype.full = function() {
            return this
        }, n.prototype.qualifiedName = function() {
            return this.residue().qualifiedName() + "." + this.name()
        };
        var v = function(a, b) {
            var c = {
                atom_one: a,
                atom_two: b
            };
            return {
                atom_one: function() {
                    return c.atom_one
                },
                atom_two: function() {
                    return c.atom_two
                },
                mid_point: function(a) {
                    return a || (a = vec3.create()), vec3.add(a, c.atom_one.pos(), c.atom_two.pos()), vec3.scale(a, a, .5), a
                }
            }
        };
        derive(o, d), o.prototype.full = function() {
            return this._mol
        }, o.prototype.assemblies = function() {
            return this._mol.assemblies()
        }, o.prototype.addChain = function(a, b) {
            var c = new p(this, a.full());
            if (this._chains.push(c), b)
                for (var d = a.residues(), e = 0; e < d.length; ++e) c.addResidue(d[e], !0);
            return c
        }, o.prototype.containsResidue = function(a) {
            if (!a) return !1;
            var b = this.chain(a.chain().name());
            return b ? b.containsResidue(a) : !1
        }, o.prototype.chains = function() {
            return this._chains
        }, o.prototype.chain = function(a) {
            for (var b = 0; b < this._chains.length; ++b)
                if (this._chains[b].name() === a) return this._chains[b];
            return null
        }, derive(p, h), p.prototype.addResidue = function(a, b) {
            var c = new q(this, a.full());
            if (this._residues.push(c), this._residueMap[a.full().index()] = c, b)
                for (var d = a.atoms(), e = 0; e < d.length; ++e) c.addAtom(d[e].full());
            return c
        }, p.prototype.containsResidue = function(a) {
            var b = this._residueMap[a.full().index()];
            return void 0 === b ? !1 : b.full() === a.full()
        }, p.prototype.eachBackboneTrace = function(a) {
            for (var b = this._chain.backboneTraces(), c = 0; c < b.length; ++c)
                for (var d = b[c].subsets(this._residues), e = 0; e < d.length; ++e) a(d[e])
        }, p.prototype.backboneTraces = function() {
            var a = [];
            return this.eachBackboneTrace(function(b) {
                a.push(b)
            }), a
        }, p.prototype.full = function() {
            return this._chain
        }, p.prototype.name = function() {
            return this._chain.name()
        }, p.prototype.structure = function() {
            return this._molView
        }, derive(q, i), q.prototype.addAtom = function(a) {
            var b = new r(this, a.full());
            this._atoms.push(b)
        }, q.prototype.full = function() {
            return this._residue
        }, q.prototype.num = function() {
            return this._residue.num()
        }, q.prototype.insCode = function() {
            return this._residue.insCode()
        }, q.prototype.ss = function() {
            return this._residue.ss()
        }, q.prototype.index = function() {
            return this._residue.index()
        }, q.prototype.chain = function() {
            return this._chainView
        }, q.prototype.name = function() {
            return this._residue.name()
        }, q.prototype.atoms = function() {
            return this._atoms
        }, q.prototype.qualifiedName = function() {
            return this._residue.qualifiedName()
        }, q.prototype.containsResidue = function(a) {
            return this._residue.full() === a.full()
        }, derive(r, j), r.prototype.full = function() {
            return this._atom
        }, r.prototype.name = function() {
            return this._atom.name()
        }, r.prototype.pos = function() {
            return this._atom.pos()
        }, r.prototype.element = function() {
            return this._atom.element()
        }, r.prototype.residue = function() {
            return this._resView
        }, r.prototype.bonds = function() {
            return this._atom.bonds()
        }, r.prototype.index = function() {
            return this._atom.index()
        }, r.prototype.qualifiedName = function() {
            return this._atom.qualifiedName()
        };
        var w = function() {
                var a = vec3.create(),
                    b = vec3.create();
                return function(c, d, e, f) {
                    for (var g = Math.max(0, d - 2); d >= g; ++g)
                        for (var h = 2; 5 > h; ++h)
                            if (!(g + h >= c.length())) {
                                var i = vec3.dist(c.posAt(a, g), c.posAt(b, g + h));
                                if (Math.abs(i - e[h - 2]) > f) return !1
                            }
                    return !0
                }
            }(),
            x = function(a, b) {
                var c = [5.45, 5.18, 6.37],
                    d = 2.1;
                return w(a, b, c, d)
            },
            y = function(a, b) {
                var c = [6.1, 10.4, 13],
                    d = 1.42;
                return w(a, b, c, d)
            };
        return a.mol = {}, a.mol.Mol = k, a.mol.Chain = l, a.mol.Residue = m, a.mol.Atom = n, a.mol.MolView = o, a.mol.ChainView = p, a.mol.ResidueView = q, a.mol.AtomView = r, a.mol.assignHelixSheet = t, !0
    }(this),
    function(a) {
        function b(a) {
            var b = parseInt(a.substr(21, 4), 10),
                c = " " === a[25] ? "\x00" : a[25],
                d = parseInt(a.substr(33, 4), 10),
                e = " " === a[37] ? "\x00" : a[37],
                f = a[19];
            return {
                first: [b, c],
                last: [d, e],
                chainName: f
            }
        }

        function c(a) {
            var b = parseInt(a.substr(22, 4), 10),
                c = " " === a[26] ? "\x00" : a[26],
                d = parseInt(a.substr(33, 4), 10),
                e = " " === a[37] ? "\x00" : a[37],
                f = a[21];
            return {
                first: [b, c],
                last: [d, e],
                chainName: f
            }
        }

        function d() {
            this._assemblies = {}, this._current = null
        }

        function e(a) {
            function e(a) {
                var b = a[16];
                if (" " === b || "A" === b) {
                    var c = a[21],
                        d = a.substr(17, 3).trim(),
                        e = a.substr(12, 4).trim(),
                        i = parseInt(a.substr(22, 4), 10),
                        j = " " === a[26] ? "\x00" : a[26],
                        k = !1,
                        l = !1;
                    g && g.name() === c || (l = !0, k = !0), h && h.num() === i && h.insCode() === j || (k = !0), l && (g = f.chain(c) || f.addChain(c)), k && (h = g.addResidue(d, i, j));
                    for (var m = vec3.create(), n = 0; 3 > n; ++n) m[n] = parseFloat(a.substr(30 + 8 * n, 8));
                    h.addAtom(e, m, a.substr(76, 2).trim())
                }
            }
            var f = new mol.Mol,
                g = null,
                h = null,
                i = [],
                j = [],
                k = new d,
                l = a.split(/\r\n|\r|\n/g),
                m = 0;
            for (m = 0; m < l.length; m++) {
                var n = l[m],
                    o = n.substr(0, 6);
                if ("ATOM  " !== o)
                    if ("HETATM" !== o) {
                        if ("REMARK" === o) {
                            var p = n.substr(7, 3);
                            "350" === p && k.nextLine(n)
                        }
                        if ("HELIX " !== o)
                            if ("SHEET " !== o) {
                                if ("END" === o) break
                            } else j.push(c(n));
                        else i.push(b(n))
                    } else e(n, !0);
                else e(n, !1)
            }
            var q = null;
            for (m = 0; m < j.length; ++m) {
                var r = j[m];
                q = f.chain(r.chainName), q && q.assignSS(r.first, r.last, "E")
            }
            for (m = 0; m < i.length; ++m) {
                var s = i[m];
                q = f.chain(s.chainName), q && q.assignSS(s.first, s.last, "H")
            }
            return f.setAssemblies(k.assemblies()), f.deriveConnectivity(), f
        }
        d.prototype.assemblies = function() {
            var a = [];
            for (var b in this._assemblies) a.push(this._assemblies[b]);
            return a
        }, d.prototype.assembly = function(a) {
            return this._assemblies[a]
        }, d.prototype.nextLine = function(a) {
            if (a = a.substr(11), "B" === a[0] && "BIOMOLECULE:" === a.substr(0, 12)) {
                var b = a.substr(13).trim();
                return this._currentAssembly = new Assembly(b), this._assemblies[b] = this._currentAssembly, void 0
            }
            if ("APPLY THE FOLLOWING TO CHAINS:" !== a.substr(0, 30) && "                   AND CHAINS:" !== a.substr(0, 30)) {
                if ("  BIOMT" === a.substr(0, 7)) {
                    var c = parseInt(a[7], 10) - 1,
                        d = parseFloat(a.substr(13, 9)),
                        e = parseFloat(a.substr(23, 9)),
                        f = parseFloat(a.substr(33, 9)),
                        g = parseFloat(a.substr(46, 12).trim());
                    return this._currentMatrix[0 + c] = d, this._currentMatrix[4 + c] = e, this._currentMatrix[8 + c] = f, this._currentMatrix[12 + c] = g, 2 === c && (this._currentSymGen.addMatrix(this._currentMatrix), this._currentMatrix = mat4.create()), void 0
                }
            } else {
                var h = a.substr(30).split(",");
                "A" === a[0] && (this._currentSymGen = new SymGenerator, this._currentAssembly.addGenerator(this._currentSymGen)), this._currentMatrix = mat4.create();
                for (var i = 0; i < h.length; ++i) {
                    var j = h[i].trim();
                    j.length && this._currentSymGen.addChain(j)
                }
            }
        }, a.io = {}, a.io.pdb = e, a.io.Remark350Reader = d
    }(this), "undefined" != typeof exports && (exports.backboneTrace = BackboneTrace), BackboneTrace.prototype.push = function(a) {
        this._trace.push(a)
    }, BackboneTrace.prototype.length = function() {
        return this._trace.length
    }, BackboneTrace.prototype.residueAt = function(a) {
        return this._trace[a]
    }, BackboneTrace.prototype.posAt = function(a, b) {
        return vec3.copy(a, this._trace[b].atom("CA").pos()), a
    }, BackboneTrace.prototype.normalAt = function(a, b) {
        return vec3.sub(a, this._trace[b].atom("O").pos(), this._trace[b].atom("C").pos()), vec3.normalize(a, a), a
    }, BackboneTrace.prototype.smoothPosAt = BackboneTrace.prototype.posAt, BackboneTrace.prototype.smoothNormalAt = BackboneTrace.prototype.normalAt, BackboneTrace.prototype.centralAtomAt = function(a) {
        return this._trace[a].atom("CA")
    }, BackboneTrace.prototype.tangentAt = function() {
        var a = vec3.create(),
            b = vec3.create();
        return function(c, d) {
            d > 0 ? this.posAt(a, d - 1) : this.posAt(a, d), d < this._trace.length - 1 ? this.posAt(b, d + 1) : this.posAt(b, d), vec3.sub(c, b, a)
        }
    }(), BackboneTrace.prototype.fullTraceIndex = function(a) {
        return a
    }, BackboneTrace.prototype.subsets = function(a) {
        for (var b = 0, c = 0, d = []; c < a.length && b < this._trace.length;) {
            for (var e = a[c].full().index(); this._trace.length > b && this._trace[b].index() < e;) ++b;
            if (b >= this._trace.length) break;
            for (var f = this._trace[b].index(); a.length > c && a[c].full().index() < f;) ++c;
            if (c >= a.length) break;
            for (var g = b, h = c; a.length > c && this._trace.length > b && a[c].full().index() === this._trace[b].index();) ++c, ++b;
            var i = c,
                j = b;
            d.push(new TraceSubset(this, g, j, a.slice(h, i)))
        }
        return d
    }, TraceSubset.prototype.length = function() {
        return this._length
    }, TraceSubset.prototype.residueAt = function(a) {
        return this._fullTrace.residueAt(this._fullTraceBegin + a)
    }, TraceSubset.prototype._interpolate = function() {
        var a = (vec3.create(), vec3.create()),
            b = vec3.create();
        return function(c, d, e, f) {
            return this.tangentAt(a, d), this.tangentAt(b, e), vec3.scale(a, a, f), vec3.scale(b, b, f), geom.cubicHermiteInterpolate(c, this.centralAtomAt(d).pos(), a, this.centralAtomAt(e).pos(), b, .5, 0), c
        }
    }(), TraceSubset.prototype.smoothPosAt = function() {
        vec3.create(), vec3.create(), vec3.create();
        return function(a, b, c) {
            if (0 === b && !this._isNTerminal) return this._interpolate(a, b, b + 1, c);
            if (b === this._length - 1 && !this._isCTerminal) return this._interpolate(a, b - 1, b, c);
            var d = this.centralAtomAt(b);
            return vec3.copy(a, d.pos()), a
        }
    }(), TraceSubset.prototype.smoothNormalAt = function() {
        return function(a, b) {
            return this._fullTrace.normalAt(a, b + this._fullTraceBegin), a
        }
    }(), TraceSubset.prototype.posAt = function(a, b) {
        var c = this.centralAtomAt(b),
            d = null;
        return vec3.copy(a, c.pos()), 0 !== b || this._isNTerminal || (d = this.centralAtomAt(b + 1), vec3.add(a, a, d.pos()), vec3.scale(a, a, .5)), b !== this._length - 1 || this._isCTerminal || (d = this.centralAtomAt(b - 1), vec3.add(a, a, d.pos()), vec3.scale(a, a, .5)), a
    }, TraceSubset.prototype.centralAtomAt = function(a) {
        return this.residueAt(a).atom("CA")
    }, TraceSubset.prototype.fullTraceIndex = function(a) {
        return this._fullTraceBegin + a
    }, TraceSubset.prototype.tangentAt = function(a, b) {
        return this._fullTrace.tangentAt(a, b + this._fullTraceBegin)
    };
var render = function() {
    "use strict";
    var a = {},
        b = .7071,
        c = [-b, -b, 0, b, -b, 0, b, b, 0, -b, b, 0],
        d = [-6 * b, -1 * b, 0, 6 * b, -1 * b, 0, 6 * b, 1 * b, 0, -6 * b, 1 * b, 0],
        e = [-10 * b, -1 * b, 0, 10 * b, -1 * b, 0, 10 * b, 1 * b, 0, -10 * b, 1 * b, 0],
        f = function() {
            var a = vec3.create(),
                b = vec3.create(),
                c = vec3.create();
            return function(d, e, f, g) {
                e = Math.max(e, 1), f = Math.min(g - 1, f);
                var h = 3 * (e - 1);
                vec3.set(a, d[h], d[h + 1], d[h + 2]), vec3.set(c, d[3 * e], d[3 * e + 1], d[3 * e + 2]);
                for (var i = e; f > i; ++i) h = 3 * (i + 1), vec3.set(b, d[h], d[h + 1], d[h + 2]), d[3 * i + 0] = .25 * b[0] + .5 * c[0] + .25 * a[0], d[3 * i + 1] = .25 * b[1] + .5 * c[1] + .25 * a[1], d[3 * i + 2] = .25 * b[2] + .5 * c[2] + .25 * a[2], vec3.copy(a, c), vec3.copy(c, b)
            }
        }(),
        g = function() {
            return function(a, b, c, d, e) {
                e ? vec3.cross(d, b, c) : geom.ortho(d, b), vec3.cross(c, d, b), vec3.normalize(d, d), vec3.normalize(c, c), a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = d[0], a[4] = d[1], a[5] = d[2], a[6] = b[0], a[7] = b[1], a[8] = b[2]
            }
        }(),
        h = function() {
            var a = vec4.fromValues(0, 0, 0, 1);
            return function(b, c, d, e) {
                var f = e.atomCount(),
                    g = d.idPool.getContinuousRange(f),
                    h = d.protoSphere.numVerts(),
                    i = d.protoSphere.numIndices(),
                    j = 1.5 * d.radiusMultiplier;
                b.addIdRange(g), b.addChainVertArray(e, h * f, i * f), e.eachAtom(function(e) {
                    var f = b.vertArrayWithSpaceFor(h);
                    d.color.colorFor(e, a, 0);
                    var i = f.numVerts(),
                        k = g.nextId({
                            geom: b,
                            atom: e
                        });
                    d.protoSphere.addTransformed(f, e.pos(), j, a, k);
                    var l = f.numVerts();
                    c.addAssoc(e, f, i, l)
                })
            }
        }();
    a.spheres = function(a, b, c) {
        var d = new ProtoSphere(c.sphereDetail, c.sphereDetail);
        c.protoSphere = d;
        var e = new MeshGeom(b, c.float32Allocator, c.uint16Allocator),
            f = new AtomVertexAssoc(a, !0);
        return e.setVertAssoc(f), e.setShowRelated(c.showRelated), c.color.begin(a), a.eachChain(function(a) {
            h(e, f, c, a)
        }), c.color.end(a), e
    };
    var i = function() {
        var a = vec3.create(),
            b = vec3.create(),
            c = vec4.fromValues(0, 0, 0, 1),
            d = vec3.create(),
            e = vec3.create(),
            f = mat3.create();
        return function(h, i, j, k) {
            var l = k.atomCount(),
                m = 0;
            k.eachAtom(function(a) {
                m += a.bonds().length
            });
            var n = l * j.protoSphere.numVerts() + m * j.protoCyl.numVerts(),
                o = l * j.protoSphere.numIndices() + m * j.protoCyl.numIndices();
            h.addChainVertArray(k, n, o);
            var p = j.idPool.getContinuousRange(l);
            h.addIdRange(p), k.eachAtom(function(k) {
                var l = j.protoSphere.numVerts() + k.bondCount() * j.protoCyl.numVerts(),
                    m = h.vertArrayWithSpaceFor(l),
                    n = m.numVerts(),
                    o = p.nextId({
                        geom: h,
                        atom: k
                    });
                j.color.colorFor(k, c, 0), j.protoSphere.addTransformed(m, k.pos(), j.radius, c, o), k.eachBond(function(h) {
                    h.mid_point(a), vec3.sub(b, k.pos(), a);
                    var i = vec3.length(b);
                    vec3.scale(b, b, 1 / i), g(f, b, d, e, !1), vec3.add(a, a, k.pos()), vec3.scale(a, a, .5), j.protoCyl.addTransformed(m, a, i, j.radius, f, c, c, o, o)
                });
                var q = m.numVerts();
                i.addAssoc(k, m, n, q)
            })
        }
    }();
    a.ballsAndSticks = function(a, b, c) {
        var d = new AtomVertexAssoc(a, !0),
            e = new ProtoSphere(c.sphereDetail, c.sphereDetail),
            f = new ProtoCylinder(c.arcDetail);
        c.protoSphere = e, c.protoCyl = f;
        var g = new MeshGeom(b, c.float32Allocator, c.uint16Allocator);
        return g.setVertAssoc(d), g.setShowRelated(c.showRelated), c.color.begin(a), a.eachChain(function(a) {
            i(g, d, c, a)
        }), c.color.end(a), g
    };
    var j = function() {
        var a = vec3.create(),
            b = vec4.fromValues(0, 0, 0, 1);
        return function(c, d, e, f) {
            var g = 0,
                h = e.atomCount(),
                i = f.idPool.getContinuousRange(h);
            c.addIdRange(i), e.eachAtom(function(a) {
                var b = a.bonds().length;
                g += b ? b : 3
            });
            var j = c.addChainVertArray(e, 2 * g);
            e.eachAtom(function(e) {
                var g = j.numVerts(),
                    h = i.nextId({
                        geom: c,
                        atom: e
                    });
                if (e.bonds().length) e.eachBond(function(c) {
                    c.mid_point(a), f.color.colorFor(e, b, 0), j.addLine(e.pos(), b, a, b, h, h)
                });
                else {
                    var k = .2,
                        l = e.pos();
                    f.color.colorFor(e, b, 0), j.addLine([l[0] - k, l[1], l[2]], b, [l[0] + k, l[1], l[2]], b, h, h), j.addLine([l[0], l[1] - k, l[2]], b, [l[0], l[1] + k, l[2]], b, h, h), j.addLine([l[0], l[1], l[2] - k], b, [l[0], l[1], l[2] + k], b, h, h)
                }
                var m = j.numVerts();
                d.addAssoc(e, j, g, m)
            })
        }
    }();
    a.lines = function(a, b, c) {
        var d = new AtomVertexAssoc(a, !0);
        c.color.begin(a);
        var e = new LineGeom(b, c.float32Allocator);
        e.setLineWidth(c.lineWidth);
        e.vertArray();
        return e.setVertAssoc(d), e.setShowRelated(c.showRelated), a.eachChain(function(a) {
            j(e, d, a, c)
        }), c.color.end(a), e
    };
    var k = function(a) {
            for (var b = 0, c = 0; c < a.length; ++c) b += 2 * (a[c].length() - 1);
            return b
        },
        l = function() {
            var a = vec4.fromValues(0, 0, 0, 1),
                b = vec4.fromValues(0, 0, 0, 1),
                c = vec3.create(),
                d = vec3.create();
            return function(e, f, g, h, i, j) {
                f.addAssoc(h, g, 0, g.numVerts(), g.numVerts() + 1);
                var k, l = j.float32Allocator.request(4 * i.length()),
                    m = j.idPool.getContinuousRange(i.length()),
                    n = m.nextId({
                        geom: e,
                        atom: i.centralAtomAt(0)
                    });
                e.addIdRange(m);
                for (var o = 1; o < i.length(); ++o) {
                    j.color.colorFor(i.centralAtomAt(o - 1), a, 0), l[4 * (o - 1) + 0] = a[0], l[4 * (o - 1) + 1] = a[1], l[4 * (o - 1) + 2] = a[2], l[4 * (o - 1) + 3] = a[3], j.color.colorFor(i.centralAtomAt(o), b, 0), i.posAt(c, o - 1), i.posAt(d, o), k = m.nextId({
                        geom: e,
                        atom: i.centralAtomAt(o)
                    }), g.addLine(c, a, d, b, n, k), n = k, k = null;
                    var p = g.numVerts();
                    f.addAssoc(h, g, o, p - 1, p + (o === i.length() - 1 ? 0 : 1))
                }
                return l[4 * i.length() - 4] = b[0], l[4 * i.length() - 3] = b[1], l[4 * i.length() - 2] = b[2], l[4 * i.length() - 1] = b[3], f.setPerResidueColors(h, l), h + 1
            }
        }(),
        m = function(a, b, c, d, e) {
            for (var f = e.backboneTraces(), g = k(f), h = a.addChainVertArray(e, g), i = 0; i < f.length; ++i) d = l(a, b, h, d, f[i], c);
            return d
        };
    a.lineTrace = function(a, b, c) {
        var d = new TraceVertexAssoc(a, 1, !0);
        c.color.begin(a);
        var e = (a.chains(), new LineGeom(b, c.float32Allocator));
        e.setLineWidth(c.lineWidth);
        var f = 0;
        return a.eachChain(function(a) {
            f = m(e, d, c, f, a)
        }), e.setVertAssoc(d), e.setShowRelated(c.showRelated), c.color.end(a), e
    };
    var n = function(a, b) {
            for (var c = 0, d = 0; d < a.length; ++d) c += 2 * (b * (a[d].length() - 1) + 1);
            return c
        },
        o = function() {
            var a = vec3.create(),
                b = vec3.create(),
                c = vec4.fromValues(0, 0, 0, 1),
                d = vec4.fromValues(0, 0, 0, 1);
            return function(e, f, g, h, i, j) {
                var k, l = j.fullTraceIndex(0),
                    m = h.float32Allocator.request(3 * j.length()),
                    n = h.float32Allocator.request(4 * j.length()),
                    o = [],
                    p = h.idPool.getContinuousRange(j.length());
                for (e.addIdRange(p), k = 0; k < j.length(); ++k) {
                    var q = j.centralAtomAt(k);
                    j.smoothPosAt(a, k, h.strength), h.color.colorFor(q, n, 4 * k), m[3 * k] = a[0], m[3 * k + 1] = a[1], m[3 * k + 2] = a[2], o.push(p.nextId({
                        geom: e,
                        atom: q
                    }))
                }
                var r = o[0],
                    s = 0,
                    t = geom.catmullRomSpline(m, j.length(), h.splineDetail, h.strength, !1, h.float32Allocator),
                    u = interpolateColor(n, h.splineDetail),
                    v = g.numVerts();
                f.addAssoc(i, g, l, v, v + 1);
                var w = Math.floor(h.splineDetail / 2),
                    x = geom.catmullRomSplineNumPoints(j.length(), h.splineDetail, !1);
                for (k = 1; x > k; ++k) {
                    a[0] = t[3 * (k - 1)], a[1] = t[3 * (k - 1) + 1], a[2] = t[3 * (k - 1) + 2], b[0] = t[3 * (k - 0)], b[1] = t[3 * (k - 0) + 1], b[2] = t[3 * (k - 0) + 2], c[0] = u[4 * (k - 1) + 0], c[1] = u[4 * (k - 1) + 1], c[2] = u[4 * (k - 1) + 2], c[3] = u[4 * (k - 1) + 3], d[0] = u[4 * (k - 0) + 0], d[1] = u[4 * (k - 0) + 1], d[2] = u[4 * (k - 0) + 2], d[3] = u[4 * (k - 0) + 3];
                    var y = Math.floor((k + w) / h.splineDetail);
                    s = o[Math.min(o.length - 1, y)], g.addLine(a, c, b, d, r, s), r = s;
                    var z = g.numVerts();
                    f.addAssoc(i, g, l + k, z - 1, z + (k === j.length - 1 ? 0 : 1))
                }
                return f.setPerResidueColors(i, n), h.float32Allocator.release(m), h.float32Allocator.release(t), i + 1
            }
        }(),
        p = function(a, b, c, d, e) {
            for (var f = d.backboneTraces(), g = n(f, c.splineDetail), h = a.addChainVertArray(d, g), i = 0; i < f.length; ++i) e = o(a, b, h, c, e, f[i]);
            return e
        };
    a.sline = function(a, b, c) {
        c.color.begin(a);
        var d = new TraceVertexAssoc(a, c.splineDetail, 1, !0),
            e = new LineGeom(b, c.float32Allocator);
        e.setLineWidth(c.lineWidth), e.setShowRelated(c.showRelated);
        var f = 0;
        return a.eachChain(function(a) {
            f = p(e, d, c, a, f)
        }), e.setVertAssoc(d), c.color.end(a), e
    };
    var q = function(a, b, c) {
            for (var d = 0, e = 0; e < a.length; ++e) d += a[e].length() * b, d += (a[e].length() - 1) * c;
            return d
        },
        r = function(a, b, c) {
            for (var d = 0, e = 0; e < a.length; ++e) d += a[e].length() * b, d += (a[e].length() - 1) * c;
            return d
        },
        s = function(a, b, c, d, e) {
            var f = e.backboneTraces(),
                g = q(f, c.protoSphere.numVerts(), c.protoCyl.numVerts()),
                h = r(f, c.protoSphere.numIndices(), c.protoCyl.numIndices());
            a.addChainVertArray(e, g, h);
            for (var i = 0; i < f.length; ++i) z(a, b, f[i], d, c), d++;
            return d
        };
    a.trace = function(a, b, c) {
        c.protoCyl = new ProtoCylinder(c.arcDetail), c.protoSphere = new ProtoSphere(c.sphereDetail, c.sphereDetail);
        var d = new MeshGeom(b, c.float32Allocator, c.uint16Allocator),
            e = new TraceVertexAssoc(a, 1, !0);
        d.setVertAssoc(e), d.setShowRelated(c.showRelated), c.color.begin(a);
        var f = 0;
        return a.eachChain(function(a) {
            f = s(d, e, c, f, a)
        }), c.color.end(a), d
    };
    var t = function(a, b, c) {
            for (var d = 0, e = 0; e < a.length; ++e) d += ((a[e].length() - 1) * c + 1) * b;
            return d
        },
        u = function(a, b, c) {
            for (var d = 0, e = 0; e < a.length; ++e) d += (a[e].length() * c - 1) * b * 6;
            return d
        },
        v = function(a, b, c, d, e) {
            var f = e.backboneTraces(),
                g = t(f, 4 * c.arcDetail, c.splineDetail),
                h = u(f, 4 * c.arcDetail, c.splineDetail);
            a.addChainVertArray(e, g, h);
            for (var i = 0; i < f.length; ++i) y(a, b, f[i], d, c), d++;
            return d
        };
    a.cartoon = function(a, b, f) {
        f.arrowSkip = Math.floor(3 * f.splineDetail / 4), f.coilProfile = new TubeProfile(c, f.arcDetail, 1), f.helixProfile = new TubeProfile(d, f.arcDetail, .1), f.strandProfile = new TubeProfile(d, f.arcDetail, .1), f.arrowProfile = new TubeProfile(e, f.arcDetail, .1);
        var g = new MeshGeom(b, f.float32Allocator, f.uint16Allocator),
            h = new TraceVertexAssoc(a, f.splineDetail, !0);
        g.setVertAssoc(h), g.setShowRelated(f.showRelated), f.color.begin(a);
        var i = 0;
        return a.eachChain(function(a) {
            i = v(g, h, f, i, a)
        }), f.color.end(a), g
    }, a.surface = function() {
        var a = vec3.create(),
            b = vec3.create(),
            c = vec4.fromValues(.8, .8, .8, 1);
        return function(d, e, f) {
            {
                var g = 0;
                d.getUint32(0)
            }
            g += 4;
            var h = d.getUint32(g);
            g += 4;
            var i = 24,
                j = i * h + g,
                k = d.getUint32(j),
                l = new MeshGeom(e, f.float32Allocator, f.uint16Allocator);
            l.setShowRelated("asym");
            var m, n = l.addVertArray(h, 3 * k);
            for (m = 0; h > m; ++m) vec3.set(a, d.getFloat32(g + 0), d.getFloat32(g + 4), d.getFloat32(g + 8)), g += 12, vec3.set(b, d.getFloat32(g + 0), d.getFloat32(g + 4), d.getFloat32(g + 8)), g += 12, n.addVertex(a, b, c, 0);
            for (g = j + 4, m = 0; k > m; ++m) {
                var o = d.getUint32(g + 0),
                    p = d.getUint32(g + 4),
                    q = d.getUint32(g + 8);
                g += 12, n.addTriangle(o - 1, q - 1, p - 1)
            }
            return l
        }
    }();
    var w = function() {
            var a = mat3.create(),
                b = vec3.create();
            return function(c, d, e, f, h, i, j, k, l, m) {
                var n = k.coilProfile;
                "C" === f || k.forceTube ? j ? geom.ortho(e, h) : vec3.cross(e, b, h) : "H" === f ? n = k.helixProfile : "E" === f ? n = k.strandProfile : "A" === f && (n = k.arrowProfile), g(a, h, e, b, !0), n.addTransformed(c, d, k.radius, a, i, j, l, m)
            }
        }(),
        x = function() {
            var a = vec3.create(),
                b = vec3.create(),
                c = vec3.create();
            return function(d, e, g, h, i, j, k, l) {
                var m = null,
                    n = null,
                    o = e.length();
                vec3.set(c, 0, 0, 0);
                for (var p = 0; o > p; ++p) {
                    j.push(k.nextId({
                        geom: d,
                        atom: e.centralAtomAt(p)
                    })), e.smoothPosAt(a, p, l.strength), h[3 * p] = a[0], h[3 * p + 1] = a[1], h[3 * p + 2] = a[2], e.smoothNormalAt(b, p, l.strength);
                    var q = e.centralAtomAt(p);
                    l.color.colorFor(q, g, 4 * p), vec3.dot(b, c) < 0 && vec3.scale(b, b, -1), "E" !== e.residueAt(p).ss() || l.forceTube || (null === m && (m = p), n = p), "C" === e.residueAt(p).ss() && null !== m && (f(h, m, n, o), f(i, m, n, o), m = null, n = null), i[3 * p] = h[3 * p] + b[0] + c[0], i[3 * p + 1] = h[3 * p + 1] + b[1] + c[1], i[3 * p + 2] = h[3 * p + 2] + b[2] + c[2], vec3.copy(c, b)
                }
            }
        }(),
        y = function() {
            {
                var a = vec3.create(),
                    b = vec3.create(),
                    c = (vec3.create(), vec4.fromValues(0, 0, 0, 1)),
                    d = vec3.create(),
                    e = vec3.create();
                mat3.create()
            }
            return function(f, g, h, i, j) {
                var k = t([h], 4 * j.arcDetail, j.splineDetail),
                    l = j.float32Allocator.request(3 * h.length()),
                    m = j.float32Allocator.request(4 * h.length()),
                    n = j.float32Allocator.request(3 * h.length()),
                    o = [],
                    p = j.idPool.getContinuousRange(h.length());
                x(f, h, m, l, n, o, p, j), f.addIdRange(p);
                var q = f.vertArrayWithSpaceFor(k),
                    r = geom.catmullRomSpline(l, h.length(), j.splineDetail, j.strength, !1, j.float32Allocator),
                    s = geom.catmullRomSpline(n, h.length(), j.splineDetail, j.strength, !1, j.float32Allocator);
                g.setPerResidueColors(i, m);
                var u = interpolateColor(m, j.splineDetail);
                vec3.set(a, r[3] - r[0], r[4] - r[1], r[5] - r[2]), vec3.set(b, r[0], r[1], r[2]), vec3.set(d, s[0] - r[0], s[1] - r[0], s[2] - r[2]), vec3.normalize(a, a), vec3.normalize(d, d), vec4.set(c, u[0], u[1], u[2], u[3]);
                var v = q.numVerts();
                w(q, b, d, h.residueAt(0), a, c, !0, j, 0, o[0]);
                var y = q.numVerts(),
                    z = 0;
                g.addAssoc(i, q, z, v, y), z += 1;
                for (var A = Math.floor(j.splineDetail / 2), B = geom.catmullRomSplineNumPoints(h.length(), j.splineDetail, !1), C = 1, D = B; D > C; ++C) {
                    var E = 3 * C,
                        F = 4 * C,
                        G = 3 * (C + 1),
                        H = 3 * (C - 1);
                    vec3.set(b, r[E], r[E + 1], r[E + 2]), C === D - 1 ? vec3.set(a, r[E] - r[H], r[E + 1] - r[H + 1], r[E + 2] - r[H + 2]) : vec3.set(a, r[G] - r[H], r[G + 1] - r[H + 1], r[G + 2] - r[H + 2]), vec3.normalize(a, a), vec4.set(c, u[F], u[F + 1], u[F + 2], u[F + 3]);
                    var I = 0,
                        J = Math.floor(C / j.splineDetail),
                        K = Math.floor((C - 1) / j.splineDetail),
                        L = Math.floor((C + j.arrowSkip) / j.splineDetail),
                        M = !1,
                        N = h.residueAt(J).ss();
                    if (!j.forceTube) {
                        if (J !== K) {
                            var O = h.residueAt(K).ss();
                            if ("C" === O && ("H" === N || "E" === N)) {
                                vec3.set(e, s[H] - r[H], s[H + 1] - r[H + 1], s[H + 2] - r[H + 2]), vec3.normalize(e, e);
                                var P = 2 * Math.PI / (4 * j.arcDetail),
                                    Q = geom.signedAngle(d, e, a);
                                I = Math.round(Q / P), I = (I + 4 * j.arcDetail) % (4 * j.arcDetail)
                            }
                        }
                        if (L !== J && L < h.length()) {
                            var R = h.residueAt(L).ss();
                            "C" === R && "E" === N && (M = !0)
                        }
                    }
                    vec3.set(d, s[3 * C] - r[E], s[E + 1] - r[E + 1], s[E + 2] - r[E + 2]), vec3.normalize(d, d), v = q.numVerts();
                    var S = Math.floor((C + A) / j.splineDetail),
                        T = o[Math.min(o.length - 1, S)];
                    w(q, b, d, N, a, c, !1, j, I, T), M && (g.addAssoc(i, q, z, v, y), w(q, b, d, "A", a, c, !1, j, 0, T), C += j.arrowSkip), y = q.numVerts(), g.addAssoc(i, q, z, v, y), z += 1, M && (z += j.arrowSkip)
                }
                j.float32Allocator.release(n), j.float32Allocator.release(l)
            }
        }(),
        z = function() {
            var a = mat3.create(),
                b = vec3.create(),
                c = vec3.create(),
                d = vec3.create(),
                e = vec3.create(),
                f = vec3.create(),
                h = vec3.create(),
                i = vec4.fromValues(0, 0, 0, 1),
                j = vec4.fromValues(0, 0, 0, 1);
            return function(k, l, m, n, o) {
                if (0 !== m.length()) {
                    var p = o.idPool.getContinuousRange(m.length());
                    k.addIdRange(p), o.color.colorFor(m.centralAtomAt(0), i, 0);
                    var r = q([m], o.protoSphere.numVerts(), o.protoCyl.numVerts()),
                        s = k.vertArrayWithSpaceFor(r),
                        t = s.numVerts();
                    m.posAt(f, 0);
                    var u = p.nextId({
                            geom: k,
                            atom: m.centralAtomAt(0)
                        }),
                        v = 0;
                    o.protoSphere.addTransformed(s, f, o.radius, i, u);
                    var w = null;
                    l.addAssoc(n, s, 0, t, w);
                    var x = o.float32Allocator.request(4 * m.length());
                    x[0] = i[0], x[1] = i[1], x[2] = i[2], x[3] = i[3];
                    for (var y = 1; y < m.length(); ++y) {
                        v = p.nextId({
                            geom: k,
                            atom: m.centralAtomAt(y)
                        }), m.posAt(f, y - 1), m.posAt(h, y), o.color.colorFor(m.centralAtomAt(y), j, 0), x[4 * y + 0] = j[0], x[4 * y + 1] = j[1], x[4 * y + 2] = j[2], x[4 * y + 3] = j[3], vec3.sub(b, h, f);
                        var z = vec3.length(b);
                        vec3.scale(b, b, 1 / z), g(a, b, c, d, !1), vec3.copy(e, f), vec3.add(e, e, h), vec3.scale(e, e, .5);
                        var A = s.numVerts();
                        o.protoCyl.addTransformed(s, e, z, o.radius, a, i, j, u, v), w = s.numVerts(), w -= (w - A) / 2, o.protoSphere.addTransformed(s, h, o.radius, j, v), u = v, l.addAssoc(n, s, y, t, w), t = w, vec3.copy(i, j)
                    }
                    l.setPerResidueColors(n, x), l.addAssoc(n, s, m.length() - 1, t, s.numVerts())
                }
            }
        }();
    return a
}();
"undefined" != typeof exports && (module.exports = render),
    function(a) {
        "use strict";

        function b(a) {
            this._projection = mat4.create(), this._camModelView = mat4.create(), this._modelView = mat4.create(), this._rotation = mat4.create(), this._translation = mat4.create(), this._near = .1, this._far = 4e3, this._fogNear = -5, this._fogFar = 50, this._fog = !0, this._fovY = 45 * Math.PI / 180, this._paramsChanged = !1, this._fogColor = vec3.fromValues(1, 1, 1), this._outlineColor = vec3.fromValues(.1, .1, .1), this._center = vec3.create(), this._zoom = 50, this._updateMat = !0, this._gl = a, this._currentShader = null, this.setViewportSize(a.viewportWidth, a.viewportHeight)
        }
        b.prototype.setRotation = function(a) {
            16 === a.length ? mat4.copy(this._rotation, a) : (this._rotation[0] = a[0], this._rotation[1] = a[1], this._rotation[2] = a[2], this._rotation[3] = 0, this._rotation[4] = a[3], this._rotation[5] = a[4], this._rotation[6] = a[5], this._rotation[7] = 0, this._rotation[8] = a[6], this._rotation[9] = a[7], this._rotation[10] = a[8], this._rotation[11] = 0, this._rotation[12] = 0, this._rotation[13] = 0, this._rotation[14] = 0, this._rotation[15] = 1), this._updateMat = !0
        }, b.prototype.mainAxes = function() {
            return [vec3.fromValues(this._rotation[0], this._rotation[4], this._rotation[8]), vec3.fromValues(this._rotation[1], this._rotation[5], this._rotation[9]), vec3.fromValues(this._rotation[2], this._rotation[6], this._rotation[10])]
        }, b.prototype.fieldOfViewY = function() {
            return this._fovY
        }, b.prototype.aspectRatio = function() {
            return this._width / this._height
        }, b.prototype.rotation = function() {
            return this._rotation
        }, b.prototype._updateIfRequired = function() {
            return this._updateMat ? (mat4.identity(this._camModelView), mat4.translate(this._camModelView, this._camModelView, [-this._center[0], -this._center[1], -this._center[2]]), mat4.mul(this._camModelView, this._rotation, this._camModelView), mat4.identity(this._translation), mat4.translate(this._translation, this._translation, [0, 0, -this._zoom]), mat4.mul(this._camModelView, this._translation, this._camModelView), mat4.identity(this._projection), mat4.perspective(this._projection, this._fovY, this._width / this._height, this._near, this._far), this._updateMat = !1, !0) : !1
        }, b.prototype.setViewportSize = function(a, b) {
            this._updateMat = !0, this._width = a, this._height = b
        }, b.prototype.setCenter = function(a) {
            this._updateMat = !0, vec3.copy(this._center, a)
        }, b.prototype.fog = function(a) {
            return void 0 !== a && (this._fog = a, this._paramsChanged = !0), this._fog
        }, b.prototype.rotateZ = function() {
            var a = mat4.create();
            return function(b) {
                mat4.identity(a), this._updateMat = !0, mat4.rotate(a, a, b, [0, 0, 1]), mat4.mul(this._rotation, a, this._rotation)
            }
        }(), b.prototype.rotateX = function() {
            var a = mat4.create();
            return function(b) {
                mat4.identity(a), this._updateMat = !0, mat4.rotate(a, a, b, [1, 0, 0]), mat4.mul(this._rotation, a, this._rotation)
            }
        }(), b.prototype.rotateY = function() {
            var a = mat4.create();
            return function(b) {
                mat4.identity(a), this._updateMat = !0, mat4.rotate(a, a, b, [0, 1, 0]), mat4.mul(this._rotation, a, this._rotation)
            }
        }(), b.prototype.panX = function(a) {
            return this.panXY(a, 0)
        }, b.prototype.panY = function(a) {
            return this.panXY(0, a)
        }, b.prototype.panXY = function() {
            var a = mat4.create(),
                b = vec3.create();
            return function(c, d) {
                mat4.transpose(a, this._rotation), this._updateMat = !0, vec3.set(b, -c, d, 0), vec3.transformMat4(b, b, a), vec3.add(b, b, this._center), this.setCenter(b)
            }
        }(), b.prototype.nearOffset = function() {
            return this._near
        }, b.prototype.farOffset = function() {
            return this._far
        }, b.prototype.setNearFar = function(a, b) {
            (a !== this._near || b !== this._far) && (this._near = a, this._far = b, this._updateMat = !0)
        }, b.prototype.setFogNearFar = function(a, b) {
            this._fogNear = a, this._fogFar = b, this._updateMat = !0
        }, b.prototype.setZoom = function(a) {
            return this._updateMat = !0, this._zoom = a, this._zoom
        }, b.prototype.zoom = function(a) {
            if (void 0 === a) return this._zoom;
            this._updateMat = !0;
            var b = 1 + .1 * a;
            return this._zoom = Math.min(1e3, Math.max(2, b * this._zoom)), this._zoom
        }, b.prototype.center = function() {
            return this._center
        }, b.prototype.currentShader = function() {
            return this._currentShader
        }, b.prototype.bind = function(a, b) {
            var c = !1;
            if (this._currentShader !== a && (this._currentShader = a, this._gl.useProgram(a), c = !0), c = this._updateIfRequired() || c, b ? (mat4.mul(this._modelView, this._camModelView, b), this._gl.uniformMatrix4fv(a.modelview, !1, this._modelView)) : this._gl.uniformMatrix4fv(a.modelview, !1, this._camModelView), c || this._paramsChanged) {
                this._paramsChanged = !1, this._gl.uniformMatrix4fv(a.projection, !1, this._projection), a.rotation && this._gl.uniformMatrix4fv(a.rotation, !1, this._rotation), this._gl.uniform1i(a.fog, this._fog);
                var d = this._zoom;
                this._gl.uniform1f(a.fogFar, this._fogFar + d), this._gl.uniform1f(a.fogNear, this._fogNear + d), this._gl.uniform3fv(a.fogColor, this._fogColor), this._gl.uniform3fv(a.outlineColor, this._outlineColor)
            }
        }, a.Cam = b
    }(this),
    function(a) {
        "use strict";

        function b(a) {
            this._freeArrays = [], this._bufferType = a
        }

        function c(a) {
            this._bufferType = a
        }
        return b.prototype.request = function(a) {
            for (var b = -1, c = null, d = 0; d < this._freeArrays.length; ++d) {
                var e = this._freeArrays[d],
                    f = e.length;
                f >= a && (null === c || c > f) && (c = f, b = d)
            }
            if (-1 !== b) {
                var g = this._freeArrays[b];
                return this._freeArrays.splice(b, 1), g
            }
            return new this._bufferType(a)
        }, b.prototype.release = function(a) {
            this._freeArrays.push(a)
        }, c.prototype.request = function(a) {
            return new this._bufferType(a)
        }, c.prototype.release = function() {}, a.PoolAllocator = b, a.NativeAllocator = c, !0
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            this._width = b.width, this._height = b.height, this._colorBufferWidth = this._width, this._colorBufferHeight = this._height, this._gl = a, this._colorHandle = this._gl.createFramebuffer(), this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._colorHandle), this._depthHandle = this._gl.createRenderbuffer(), this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, this._depthHandle), this._gl.renderbufferStorage(this._gl.RENDERBUFFER, this._gl.DEPTH_COMPONENT16, this._width, this._height), this._gl.framebufferRenderbuffer(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.RENDERBUFFER, this._depthHandle), this._colorTexture = this._gl.createTexture(), this._initColorBuffer()
        }
        b.prototype.width = function() {
            return this._width
        }, b.prototype.height = function() {
            return this._height
        }, b.prototype.bind = function() {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._colorHandle), this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, this._depthHandle), (this._colorBufferWidth !== this._width || this._colorBufferHeight !== this._height) && this._resizeBuffers(), this._gl.viewport(0, 0, this._width, this._height)
        }, b.prototype._initColorBuffer = function() {
            this.bind();
            var a = this._gl;
            a.bindTexture(a.TEXTURE_2D, this._colorTexture), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, this._width, this._height, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this._colorTexture, 0), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.bindTexture(a.TEXTURE_2D, null), this.release()
        }, b.prototype._resizeBuffers = function() {
            this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, this._depthHandle), this._gl.renderbufferStorage(this._gl.RENDERBUFFER, this._gl.DEPTH_COMPONENT16, this._width, this._height), this._gl.bindTexture(this._gl.TEXTURE_2D, this._colorTexture), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._width, this._height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, this._colorTexture, 0), this._gl.framebufferRenderbuffer(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.RENDERBUFFER, this._depthHandle), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._colorBufferWidth = this._width, this._colorBufferHeight = this._height
        }, b.prototype.resize = function(a, b) {
            this._width = a, this._height = b
        }, b.prototype.release = function() {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, null)
        }, a.FrameBuffer = b
    }(this),
    function(a) {
        "use strict";
        a.shaders = {}, a.shaders.LINES_FS = "\nprecision mediump float;\n\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\nuniform bool fog;\n\nvoid main(void) {\n  gl_FragColor = vec4(vertColor);\n  if (gl_FragColor.a == 0.0) { discard; }\n  float depth = gl_FragCoord.z / gl_FragCoord.w;\n  if (fog) {\n    float fog_factor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w),\n                        fog_factor);\n  }\n}", a.shaders.HEMILIGHT_FS = "\nprecision mediump float;\n\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\nuniform bool fog;\n\nvoid main(void) {\n  float dp = dot(vertNormal, vec3(0.0, 0.0, 1.0));\n  float hemi = max(0.0, dp)*0.5+0.5;\n  hemi *= vertColor.a;\n  gl_FragColor = vec4(vertColor.rgb*hemi, vertColor.a);\n  if (gl_FragColor.a == 0.0) { discard; }\n  float depth = gl_FragCoord.z / gl_FragCoord.w;\n  if (fog) {\n    float fog_factor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w),\n                        fog_factor);\n  }\n}", a.shaders.HEMILIGHT_VS = "\nattribute vec3 attrPos;\nattribute vec4 attrColor;\nattribute vec3 attrNormal;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  vec4 n = (modelviewMat * vec4(attrNormal, 0.0));\n  vertNormal = n.xyz;\n  vertColor = attrColor;\n}", a.shaders.OUTLINE_FS = "\nprecision mediump float;\n\nuniform vec3 outlineColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\nuniform bool fog;\n\nvoid main() {\n  gl_FragColor = vec4(outlineColor, 1.0);\n  float depth = gl_FragCoord.z / gl_FragCoord.w;\n  if (fog) { \n    float fog_factor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w),\n                        fog_factor);\n  }\n}", a.shaders.OUTLINE_VS = "\nprecision mediump float;\n\nattribute vec3 attrPos;\nattribute vec3 attrNormal;\n                                                                       \nuniform vec3 outlineColor;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\n\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  vec4 normal = modelviewMat * vec4(attrNormal, 0.0);\n  gl_Position.xy += normal.xy*0.200;\n}", a.shaders.TEXT_VS = "\nprecision mediump float;\n\nattribute vec3 attrCenter;\nattribute vec2 attrCorner;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform mat4 rotationMat;\nvarying vec2 vertTex;\nvoid main() { \n  gl_Position = projectionMat* modelviewMat* vec4(attrCenter, 1.0);\n  gl_Position.xy += attrCorner*gl_Position.w; \n  gl_Position.z -= gl_Position.w*0.0005;\n  vertTex = (attrCorner+abs(attrCorner))/(2.0*abs(attrCorner)); \n}", a.shaders.TEXT_FS = "\nprecision mediump float;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform sampler2D sampler;\nuniform float xScale;\nuniform float yScale;\nvarying vec2 vertTex;\nvoid main() { \n  gl_FragColor = texture2D(sampler, vec2(vertTex.x*xScale, vertTex.y*yScale));\n}", a.shaders.SELECT_VS = "\nprecision mediump float;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nattribute vec3 attrPos;\nattribute float attrObjId;\n\nvarying float objId;\n\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  objId = attrObjId;\n}", a.shaders.SELECT_FS = "\nprecision mediump float;\n\nvarying float objId;\nuniform int symId;\n\nint intMod(int x, int y) { \n  int z = x/y;\n  return x-y*z;\n}\nvoid main(void) {\n  // ints are only required to be 7bit...\n  int integralObjId = int(objId+0.5);\n  int red = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int green = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int blue = symId;\n  gl_FragColor = vec4(float(red), float(green), float(blue), 255.0)/255.0;\n}"
    }(this),
    function(a) {
        "use strict";

        function b(a, b, c) {
            this._from = a, this._to = b, this._duration = c, this._left = c, this._start = Date.now(), this._looping = !1, this._finished = !1
        }

        function c(a, c, d) {
            b.prototype.constructor.call(this, vec3.clone(a), vec3.clone(c), d), this._current = vec3.clone(a)
        }

        function d(a, c, d) {
            var e = mat3.create(),
                f = mat3.create();
            mat3.fromMat4(e, a), mat3.fromMat4(f, c);
            var g = quat.create(),
                h = quat.create();
            quat.fromMat3(g, e), quat.fromMat3(h, f), this._current = mat3.create(), b.prototype.constructor.call(this, g, h, d)
        }

        function e(a, c, d) {
            var e = mat3.create();
            mat3.fromMat4(e, a), b.prototype.constructor.call(this, e, null, d), this._axis = vec3.clone(c), this.setLooping(!0), this._current = mat3.create()
        }
        return b.prototype.setLooping = function(a) {
            this._looping = a
        }, b.prototype.step = function() {
            var a, b = Date.now(),
                c = b - this._start;
            if (0 === this._duration) a = 1;
            else if (this._looping) {
                var d = Math.floor(c / this._duration);
                a = (c - d * this._duration) / this._duration
            } else c = Math.min(this._duration, c), a = c / this._duration, this._finished = 1 === a;
            return this._setTo(a)
        }, b.prototype._setTo = function(a) {
            var b = (1 - Math.cos(a * Math.PI)) / 2;
            return this._current = this._from * (1 - b) + this._to * b, this._current
        }, b.prototype.finished = function() {
            return this._finished
        }, derive(c, b), c.prototype._setTo = function(a) {
            var b = (1 - Math.cos(a * Math.PI)) / 2;
            return vec3.lerp(this._current, this._from, this._to, b), this._current
        }, derive(d, b), d.prototype._setTo = function() {
            var a = quat.create();
            return function(b) {
                return quat.slerp(a, this._from, this._to, b), mat3.fromQuat(this._current, a), this._current
            }
        }(), derive(e, b), e.prototype._setTo = function() {
            var a = mat3.create();
            return function(b) {
                var c = .2 * Math.sin(2 * b * Math.PI);
                return geom.axisRotation(a, this._axis, c), mat3.mul(this._current, this._from, a), this._current
            }
        }(), a.Move = c, a.Rotate = d, a.RockAndRoll = e, a.Animation = b, !0
    }(this),
    function(a) {
        "use strict";

        function b(a, b) {
            this.near = a, this.far = b
        }

        function c(a) {
            a = a || {}, this._near = a.near || .1, this._far = a.far || 400
        }

        function d() {
            this._far = 100
        }
        c.prototype.update = function() {
            return new b(this._near, this._far)
        }, d.prototype.update = function(a, c) {
            for (var d = c.center(), e = null, f = 0; f < a.length; ++f) {
                var g = a[f];
                g.visible() && (e = g.updateSquaredSphereRadius(d, e))
            }
            if (null === e) return null;
            e = Math.sqrt(e);
            var h = c.zoom(),
                i = 1.05 * (e + h),
                j = .1;
            return new b(j, i)
        }, a.FixedSlab = c, a.AutoSlab = d, a.Slab = b
    }(this);
var pv = function() {
    "use strict";

    function a(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }

    function b(a, b) {
        return a = a || "auto", "fixed" === a ? new FixedSlab(b) : "auto" === a ? new AutoSlab(b) : null
    }

    function c(c, d) {
        d = d || {}, this._options = {
            width: d.width || 500,
            height: d.height || 500,
            animateTime: d.animateTime || 0,
            antialias: d.antialias,
            quality: d.quality || "low",
            style: d.style || "hemilight",
            background: d.background ? forceRGB(d.background) : vec3.fromValues(1, 1, 1),
            slabMode: b(d.slabMode),
            atomClick: d.atomClick || null,
            atomDoubleClick: "center"
        }, this._objects = [], this._domElement = c, this._redrawRequested = !1, this._resize = !1, this._lastTimestamp = null, this.listenerMap = {}, this._canvas = document.createElement("canvas"), this._textureCanvas = document.createElement("canvas"), this._textureCanvas.style.display = "none", this._objectIdManager = new UniqueObjectIdPool;
        var e = c.getBoundingClientRect();
        "auto" === this._options.width && (this._options.width = e.width), "auto" === this._options.height && (this._options.height = e.height), this._options.outline = "outline" in d ? d.outline : !0, "atomDoubleClicked" in d && (this._options.atomDoubleClick = d.atomDoubleClick), this._ok = !1, this._camAnim = {
            center: null,
            zoom: null,
            rotation: null
        }, this.quality(this._options.quality), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._domElement.appendChild(this._canvas), this._domElement.appendChild(this._textureCanvas), "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? this._initPV() : document.addEventListener("DOMContentLoaded", a(this, this._initPV)), null !== this._options.atomDoubleClick && this.addListener("atomDoubleClicked", this._options.atomDoubleClick), null !== this._options.atomClick && this.addListener("atomClicked", this._options.atomClick)
    }

    function d(a, b, c) {
        this._obj = a, this._symIndex = b, this._transform = c
    }
    var e = '<div style="vertical-align:middle; text-align:center;"><h1>Oink</h1><p>Your browser does not support WebGL. You might want to try Chrome, Firefox, IE 11, or newer versions of Safari</p><p>If you are using a recent version of one of the above browsers, your graphic card might be blocked. Check the browser documentation for details</p></div>',
        f = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }();
    c.prototype._centerOnClicked = function(a) {
        if (null !== a) {
            var b = vec3.create(),
                c = a.object().atom,
                d = c.pos();
            a.transform() ? (vec3.transformMat4(b, d, a.transform()), this.setCenter(b, this._options.animateTime)) : this.setCenter(d, this._options.animateTime)
        }
    }, c.prototype._ensureSize = function() {
        this._resize && (this._resize = !1, this._options.realWidth = this._options.width * this._options.samples, this._options.realHeight = this._options.height * this._options.samples, this._gl.viewport(0, 0, this._options.realWidth, this._options._realHeight), this._canvas.width = this._options.realWidth, this._canvas.height = this._options.realHeight, this._cam.setViewportSize(this._options.realWidth, this._options.realHeight), this._options.samples > 1 && this._initManualAntialiasing(this._options.samples), this._pickBuffer.resize(this._options.width, this._options.height))
    }, c.prototype.resize = function(a, b) {
        (a !== this._options.width || b !== this._options.height) && (this._resize = !0, this._options.width = a, this._options.height = b, this.requestRedraw())
    }, c.prototype.fitParent = function() {
        var a = this._domElement.getBoundingClientRect();
        this.resize(a.width, a.height)
    }, c.prototype.gl = function() {
        return this._gl
    }, c.prototype.ok = function() {
        return this._ok
    }, c.prototype.options = function(a, b) {
        return void 0 !== b ? ("fog" === a ? (this._cam.fog(b), this.requestRedraw()) : this._options[a] = b, b) : this._options[a]
    }, c.prototype.quality = function(a) {
        return this._options.quality = a, "high" === a ? (this._options.arcDetail = 4, this._options.sphereDetail = 16, this._options.splineDetail = 8, void 0) : "medium" === a ? (this._options.arcDetail = 3, this._options.sphereDetail = 10, this._options.splineDetail = 4, void 0) : "low" === a ? (this._options.arcDetail = 2, this._options.sphereDetail = 8, this._options.splineDetail = 2, void 0) : void 0
    }, c.prototype.imageData = function() {
        return this._canvas.toDataURL()
    }, c.prototype._initContext = function() {
        try {
            var a = {
                antialias: this._options.antialias,
                preserveDrawingBuffer: !0
            };
            this._gl = this._canvas.getContext("experimental-webgl", a)
        } catch (b) {
            return !1
        }
        return this._gl ? !0 : !1
    }, c.prototype._initManualAntialiasing = function(a) {
        var b = 1 / a,
            c = .5 * -(1 - b) * this._options.realWidth,
            d = .5 * -(1 - b) * this._options.realHeight,
            e = "translate(" + c + "px, " + d + "px)",
            f = "scale(" + b + ", " + b + ")",
            g = e + " " + f;
        this._canvas.style.webkitTransform = g, this._canvas.style.transform = g, this._canvas.style.ieTransform = g, this._canvas.width = this._options.realWidth, this._canvas.height = this._options.realHeight
    }, c.prototype._initPickBuffer = function() {
        var a = {
            width: this._options.width,
            height: this._options.height
        };
        this._pickBuffer = new FrameBuffer(this._gl, a)
    }, c.prototype._initGL = function() {
        var a = 1;
        return this._initContext() ? (!this._gl.getContextAttributes().antialias && this._options.antialias && (a = 2), this._options.realWidth = this._options.width * a, this._options.realHeight = this._options.height * a, this._options.samples = a, a > 1 && this._initManualAntialiasing(a), this._gl.viewportWidth = this._options.realWidth, this._gl.viewportHeight = this._options.realHeight, this._gl.clearColor(this._options.background[0], this._options.background[1], this._options.background[2], 1), this._gl.lineWidth(2), this._gl.cullFace(this._gl.FRONT), this._gl.enable(this._gl.CULL_FACE), this._gl.enable(this._gl.DEPTH_TEST), this._initPickBuffer(), !0) : !1
    }, c.prototype._shaderFromString = function(a, b) {
        var c;
        if ("fragment" === b) c = this._gl.createShader(this._gl.FRAGMENT_SHADER);
        else {
            if ("vertex" !== b) return null;
            c = this._gl.createShader(this._gl.VERTEX_SHADER)
        }
        return this._gl.shaderSource(c, a), this._gl.compileShader(c), this._gl.getShaderParameter(c, this._gl.COMPILE_STATUS) ? c : null
    }, c.prototype._initShader = function(b, c) {
        var d = this._shaderFromString(c, "fragment"),
            e = this._shaderFromString(b, "vertex"),
            f = this._gl.createProgram();
        if (this._gl.attachShader(f, e), this._gl.attachShader(f, d), this._gl.linkProgram(f), !this._gl.getProgramParameter(f, this._gl.LINK_STATUS)) return null;
        this._gl.clearColor(this._options.background[0], this._options.background[1], this._options.background[2], 1), this._gl.enable(this._gl.BLEND), this._gl.blendFunc(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA), this._gl.enable(this._gl.CULL_FACE), this._gl.enable(this._gl.DEPTH_TEST);
        var g = a(this._gl, this._gl.getAttribLocation),
            h = a(this._gl, this._gl.getUniformLocation);
        return f.posAttrib = g(f, "attrPos"), f.colorAttrib = g(f, "attrColor"), f.normalAttrib = g(f, "attrNormal"), f.objIdAttrib = g(f, "attrObjId"), f.symId = h(f, "symId"), f.projection = h(f, "projectionMat"), f.modelview = h(f, "modelviewMat"), f.rotation = h(f, "rotationMat"), f.fog = h(f, "fog"), f.fogFar = h(f, "fogFar"), f.fogNear = h(f, "fogNear"), f.fogColor = h(f, "fogColor"), f.outlineColor = h(f, "outlineColor"), f
    }, c.prototype._mouseUp = function() {
        this._canvas.removeEventListener("mousemove", this._mouseRotateListener, !1), this._canvas.removeEventListener("mousemove", this._mousePanListener, !1), this._canvas.removeEventListener("mouseup", this._mouseUpListener, !1), document.removeEventListener("mouseup", this._mouseUpListener, !1), document.removeEventListener("mousemove", this._mouseRotateListener), document.removeEventListener("mousemove", this._mousePanListener)
    }, c.prototype._initPV = function() {
        return this._initGL() ? (this._ok = !0, this._2dcontext = this._textureCanvas.getContext("2d"), this._float32Allocator = new PoolAllocator(Float32Array), this._uint16Allocator = new PoolAllocator(Uint16Array), this._cam = new Cam(this._gl), this._shaderCatalog = {
            hemilight: this._initShader(shaders.HEMILIGHT_VS, shaders.HEMILIGHT_FS),
            outline: this._initShader(shaders.OUTLINE_VS, shaders.OUTLINE_FS),
            lines: this._initShader(shaders.HEMILIGHT_VS, shaders.LINES_FS),
            text: this._initShader(shaders.TEXT_VS, shaders.TEXT_FS),
            select: this._initShader(shaders.SELECT_VS, shaders.SELECT_FS)
        }, this._boundDraw = a(this, this._draw), this._mousePanListener = a(this, this._mousePan), this._mouseRotateListener = a(this, this._mouseRotate), this._mouseUpListener = a(this, this._mouseUp), "onwheel" in this._canvas ? this._canvas.addEventListener("wheel", a(this, this._mouseWheelFF), !1) : this._canvas.addEventListener("mousewheel", a(this, this._mouseWheel), !1), this._canvas.addEventListener("dblclick", a(this, this._mouseDoubleClick), !1), this._canvas.addEventListener("mousedown", a(this, this._mouseDown), !1), document.getElementById("pv_status") && this._canvas.addEventListener("mousemove", a(this, this._mouseMove), !1), !0) : (this._domElement.removeChild(this._canvas), this._domElement.innerHTML = e, this._domElement.style.width = this._options.width + "px", this._domElement.style.height = this._options.height + "px", !1)
    }, c.prototype.requestRedraw = function() {
        this._redrawRequested || (this._redrawRequested = !0, f(this._boundDraw))
    }, c.prototype._drawWithPass = function(a) {
        for (var b = 0, c = this._objects.length; b !== c; ++b) this._objects[b].draw(this._cam, this._shaderCatalog, this._options.style, a)
    }, c.prototype.setCamera = function(a, b, c, d) {
        return d |= 0, 0 === d ? (this._cam.setCenter(b), this._cam.setRotation(a), this._cam.setZoom(c), this.requestRedraw(), void 0) : (this._camAnim.center = new Move(this._cam.center(), vec3.clone(b), d), this._camAnim.rotation = new Rotate(this._cam.rotation(), mat4.clone(a), d), this._camAnim.zoom = new Animation(this._cam.zoom(), c, d), this.requestRedraw(), void 0)
    }, c.prototype._animateCam = function() {
        var a = !1;
        this._camAnim.center && (this._cam.setCenter(this._camAnim.center.step()), this._camAnim.center.finished() && (this._camAnim.center = null), a = !0), this._camAnim.rotation && (this._cam.setRotation(this._camAnim.rotation.step()), this._camAnim.rotation.finished() && (this._camAnim.rotation = null), a = !0), this._camAnim.zoom && (this._cam.setZoom(this._camAnim.zoom.step()), this._camAnim.zoom.finished() && (this._camAnim.zoom = null), a = !0), a && this.requestRedraw()
    }, c.prototype._draw = function() {
        this._redrawRequested = !1, this._ensureSize(), this._animateCam();
        var a = this._options.slabMode.update(this._objects, this._cam);
        a && this._cam.setNearFar(a.near, a.far), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._gl.viewport(0, 0, this._options.realWidth, this._options.realHeight), this._gl.cullFace(this._gl.FRONT), this._gl.enable(this._gl.CULL_FACE), this._gl.enable(this._gl.BLEND), this._drawWithPass("normal"), this._options.outline && (this._gl.cullFace(this._gl.BACK), this._gl.enable(this._gl.CULL_FACE), this._drawWithPass("outline"))
    }, c.prototype.setCenter = function(a, b) {
        return b |= 0, 0 === b ? (this._cam.setCenter(a), void 0) : (this._camAnim.center = new Move(this._cam.center(), vec3.clone(a), b), this.requestRedraw(), void 0)
    }, c.prototype.centerOn = function(a, b) {
        this.setCenter(a.center(), b)
    }, c.prototype.clear = function() {
        for (var a = 0; a < this._objects.length; ++a) this._objects[a].destroy();
        this._objects = []
    }, c.prototype._mouseWheel = function(a) {
        this._cam.zoom(a.wheelDelta < 0 ? -1 : 1), a.preventDefault(), this.requestRedraw()
    }, c.prototype._mouseWheelFF = function(a) {
        this._cam.zoom(a.deltaY < 0 ? 1 : -1), a.preventDefault(), this.requestRedraw()
    }, c.prototype._mouseDoubleClick = function() {
        return function(a) {
            var b = this._canvas.getBoundingClientRect(),
                c = this.pick({
                    x: a.clientX - b.left,
                    y: a.clientY - b.top
                });
            this._dispatchPickedEvent(a, "atomDoubleClicked", c), this.requestRedraw()
        }
    }(), c.prototype.addListener = function(b, c) {
        var d = this.listenerMap[b];
        "undefined" == typeof d && (d = [], this.listenerMap[b] = d), "center" === c ? d.push(a(this, this._centerOnClicked)) : d.push(c)
    }, c.prototype._dispatchPickedEvent = function(a, b, c) {
        var d = this.listenerMap[b];
        d && d.forEach(function(b) {
            b(c, a)
        })
    }, c.prototype._mouseDown = function(a) {
        if (0 === a.button) {
            var b = (new Date).getTime();
            if ("undefined" == typeof this.lastClickTime || b - this.lastClickTime > 300) {
                this.lastClickTime = b;
                var c = this._canvas.getBoundingClientRect(),
                    d = this.pick({
                        x: a.clientX - c.left,
                        y: a.clientY - c.top
                    });
                this._dispatchPickedEvent(a, "atomClicked", d)
            }
            a.preventDefault(), a.shiftKey === !0 ? (this._canvas.addEventListener("mousemove", this._mousePanListener, !1), document.addEventListener("mousemove", this._mousePanListener, !1)) : (this._canvas.addEventListener("mousemove", this._mouseRotateListener, !1), document.addEventListener("mousemove", this._mouseRotateListener, !1)), this._canvas.addEventListener("mouseup", this._mouseUpListener, !1), document.addEventListener("mouseup", this._mouseUpListener, !1), this._lastMousePos = {
                x: a.pageX,
                y: a.pageY
            }
        }
    };
    var g = null;
    return c.prototype._mouseMove = function(a) {
        var b = (vec3.create(), this._canvas.getBoundingClientRect()),
            c = this.pick({
                x: a.clientX - b.left,
                y: a.clientY - b.top
            });
        if (!c) return null !== g && (g = null, document.getElementById("pv_status").innerHTML = ""), void 0;
        if (null === g || g !== c.object().atom) {
            g = c.object().atom;
            var d = g.qualifiedName();
            "_" === d.charAt(0) && (d = g.residue().name()), document.getElementById("pv_status").innerHTML = d
        }
    }, c.prototype._mouseRotate = function(a) {
        var b = {
                x: a.pageX,
                y: a.pageY
            },
            c = {
                x: b.x - this._lastMousePos.x,
                y: b.y - this._lastMousePos.y
            },
            d = .005;
        this._cam.rotateX(d * c.y), this._cam.rotateY(d * c.x), this._lastMousePos = b, this.requestRedraw()
    }, c.prototype._mousePan = function(a) {
        var b = {
                x: a.pageX,
                y: a.pageY
            },
            c = {
                x: b.x - this._lastMousePos.x,
                y: b.y - this._lastMousePos.y
            },
            d = .05;
        this._cam.panXY(d * c.x, d * c.y), this._lastMousePos = b, this.requestRedraw()
    }, c.prototype.RENDER_MODES = ["sline", "line", "trace", "lineTrace", "cartoon", "tube", "spheres"], c.prototype.renderAs = function(a, b, c, d) {
        for (var e = !1, f = 0; f < this.RENDER_MODES.length; ++f)
            if (this.RENDER_MODES[f] === c) {
                e = !0;
                break
            }
        return e ? this[c](a, b, d) : void 0
    }, c.prototype._handleStandardOptions = function(a) {
        return a = copy(a), a.float32Allocator = this._float32Allocator, a.uint16Allocator = this._uint16Allocator, a.idPool = this._objectIdManager, a.showRelated = a.showRelated || "asym", a
    }, c.prototype.lineTrace = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.uniform([1, 0, 1]), d.lineWidth = d.lineWidth || 4;
        var e = render.lineTrace(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.spheres = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.byElement(), d.sphereDetail = this.options("sphereDetail"), d.radiusMultiplier = d.radiusMultiplier || 1;
        var e = render.spheres(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.sline = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.uniform([1, 0, 1]), d.splineDetail = d.splineDetail || this.options("splineDetail"), d.strength = d.strength || 1, d.lineWidth = d.lineWidth || 4;
        var e = render.sline(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.boundingSpheres = function(a, b, c) {
        var d = b.vertArrays(),
            e = new MeshGeom(a, c.float32Allocator, c.uint16Allocator);
        e.order(100);
        var f = new ProtoSphere(16, 16),
            g = f.numVerts(),
            h = f.numIndices(),
            i = new AtomVertexAssoc(b.structure());
        e.setVertAssoc(i), e.addChainVertArray({
            name: function() {
                return "a"
            }
        }, d.length * g, h * d.length), e.setShowRelated("asym");
        for (var j = [.5, .5, .5, .2], k = e.vertArrayWithSpaceFor(g * d.length), l = 0; l < d.length; ++l) {
            var m = d[l].boundingSphere();
            f.addTransformed(k, m.center(), m.radius(), j, 0)
        }
        return e
    }, c.prototype.cartoon = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.bySS(), d.strength = d.strength || 1, d.splineDetail = d.splineDetail || this.options("splineDetail"), d.arcDetail = d.arcDetail || this.options("arcDetail"), d.radius = d.radius || .3, d.forceTube = d.forceTube || !1;
        var e = render.cartoon(b, this._gl, d),
            f = this.add(a, e);
        if (d.boundingSpheres) {
            var g = this.boundingSpheres(this._gl, e, d);
            this.add(a + ".bounds", g)
        }
        return f
    }, c.prototype.surface = function(a, b, c) {
        var d = this._handleStandardOptions(c),
            e = render.surface(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.tube = function(a, b, c) {
        return c = c || {}, c.forceTube = !0, this.cartoon(a, b, c)
    }, c.prototype.ballsAndSticks = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.byElement(), d.radius = d.radius || .3, d.arcDetail = 2 * (d.arcDetail || this.options("arcDetail")), d.sphereDetail = d.sphereDetail || this.options("sphereDetail");
        var e = render.ballsAndSticks(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.lines = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.byElement(), d.lineWidth = d.lineWidth || 4;
        var e = render.lines(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.trace = function(a, b, c) {
        var d = this._handleStandardOptions(c);
        d.color = d.color || color.uniform([1, 0, 0]), d.radius = d.radius || .3, d.arcDetail = 2 * (d.arcDetail || this.options("arcDetail")), d.sphereDetail = d.sphereDetail || this.options("sphereDetail");
        var e = render.trace(b, this._gl, d);
        return this.add(a, e)
    }, c.prototype.fitTo = function(a, b) {
        var c = this._cam.mainAxes();
        b = b || this._options.slabMode;
        var d = [new Range, new Range, new Range];
        if (a instanceof SceneNode) a.updateProjectionIntervals(c[0], c[1], c[2], d[0], d[1], d[2]);
        else if (void 0 !== a.eachAtom) {
            a.eachAtom(function(a) {
                for (var b = a.pos(), e = 0; 3 > e; ++e) d[e].update(vec3.dot(b, c[e]))
            });
            for (var e = 0; 3 > e; ++e) d[e].extend(1.5)
        }
        this._fitToIntervals(c, d, b)
    }, c.prototype._fitToIntervals = function(a, b) {
        if (!(b[0].empty() || b[1].empty() || b[2].empty())) {
            var c = b[0].center(),
                d = b[1].center(),
                e = b[2].center(),
                f = [c * a[0][0] + d * a[1][0] + e * a[2][0], c * a[0][1] + d * a[1][1] + e * a[2][1], c * a[0][2] + d * a[1][2] + e * a[2][2]],
                g = this._cam.fieldOfViewY(),
                h = this._cam.aspectRatio(),
                i = b[0].length() / h,
                j = b[1].length(),
                k = .38 * Math.max(i, j),
                l = k / Math.tan(.5 * g),
                m = l + .5 * b[2].length(),
                n = .5,
                o = Math.max(l - n, .1),
                p = 2 * n + l + b[2].length();
            this._cam.setNearFar(o, p), this.setCamera(this._cam.rotation(), f, m, this._options.animateTime), this.requestRedraw()
        }
    }, c.prototype.autoZoom = function() {
        var a = this._cam.mainAxes(),
            b = [new Range, new Range, new Range];
        this.forEach(function(c) {
            c.visible() && c.updateProjectionIntervals(a[0], a[1], a[2], b[0], b[1], b[2])
        }), this._fitToIntervals(a, b)
    }, c.prototype.slabInterval = function() {}, c.prototype.autoSlab = function() {
        var a = this._options._slabMode.update(this._objects, this._cam);
        null !== a && this._cam.setNearFar(a.near, a.far), this.requestRedraw()
    }, c.prototype.rockAndRoll = function(a) {
        return a === !0 ? (this._camAnim.rotation = new RockAndRoll(this._cam.rotation(), [0, 1, 0], 2e3), this.requestRedraw()) : a === !1 && (this._camAnim.rotation = null, this.requestRedraw()), null !== this._camAnim.rotation
    }, c.prototype.slabMode = function(a, c) {
        c = c || {};
        var d = b(a, c),
            e = d.update(this._objects, this._cam);
        null !== e && this._cam.setNearFar(e.near, e.far), this._options.slabMode = d, this.requestRedraw()
    }, c.prototype.label = function(a, b, c) {
        var d = new TextLabel(this._gl, this._textureCanvas, this._2dcontext, c, b);
        return this.add(a, d), d
    }, c.prototype._drawPickingScene = function() {
        this._gl.clearColor(0, 0, 0, 0), this._gl.disable(this._gl.BLEND), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._gl.clearColor(this._options.background[0], this._options.background[1], this._options.background[2], 1), this._gl.cullFace(this._gl.FRONT), this._gl.enable(this._gl.CULL_FACE), this._drawWithPass("select")
    }, d.prototype.object = function() {
        return this._obj
    }, d.prototype.symIndex = function() {
        return this._symIndex
    }, d.prototype.transform = function() {
        return this._transform
    }, c.prototype.pick = function(a) {
        this._pickBuffer.bind(), this._drawPickingScene();
        var b = new Uint8Array(4);
        this._gl.readPixels(a.x, this._options.height - a.y, 1, 1, this._gl.RGBA, this._gl.UNSIGNED_BYTE, b), this._pickBuffer.release(), b.data && (b = b.data);
        if (0 === b[3]) return null;
        var c = b[0] | b[1] << 8,
            e = b[2],
            f = this._objectIdManager.objectForId(c);
        if (void 0 === f) return null;
        var g = null;
        return 255 !== e && (g = f.geom.symWithIndex(e)), new d(f, 255 > e ? e : null, g)
    }, c.prototype.add = function(a, b) {
        return b.name(a), this._objects.push(b), this._objects.sort(function(a, b) {
            return a.order() - b.order()
        }), this.requestRedraw(), b
    }, c.prototype._globToRegex = function(a) {
        var b = a.replace(".", "\\.").replace("*", ".*");
        return new RegExp("^" + b + "$")
    }, c.prototype.forEach = function() {
        var a, b = "*";
        2 === arguments.length ? (a = arguments[1], b = arguments[0]) : a = arguments[0];
        for (var c = this._globToRegex(b), d = 0; d < this._objects.length; ++d) {
            var e = this._objects[d];
            c.test(e.name()) && a(e, d)
        }
    }, c.prototype.get = function(a) {
        for (var b = 0; b < this._objects.length; ++b)
            if (this._objects[b].name() === a) return this._objects[b];
        return null
    }, c.prototype.hide = function(a) {
        this.forEach(a, function(a) {
            a.hide()
        })
    }, c.prototype.show = function(a) {
        this.forEach(a, function(a) {
            a.show()
        })
    }, c.prototype.rm = function(a) {
        for (var b = [], c = this._globToRegex(a), d = 0; d < this._objects.length; ++d) {
            var e = this._objects[d];
            c.test(e.name()) ? e.destroy() : b.push(e)
        }
        this._objects = b
    }, c.prototype.all = function() {
        return this._objects
    }, {
        Viewer: function(a, b) {
            return new c(a, b)
        }
    }
}();
"undefined" != typeof exports && (module.exports = pv);
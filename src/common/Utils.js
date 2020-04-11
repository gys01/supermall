// 防抖函数    处理频繁refresh
//   作用过程
//   将refresh传递到这个函数中,生成一个新的函数
//   之后在调用频繁的时候，就会调用新生成的函数
//   新生成的函数，不会频繁调用，如果下一次执行很快，则会将上一次取消
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ``;
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

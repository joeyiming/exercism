export function hey(message: string): string {

  function allCapitals(msg: string): boolean {
    if (!(/[a-zA-Z]/.test(msg))){
      // 不包含字母
      return false
    }
    for (const char of msg) {
      if (/[a-z]/.test(char)) {
        // 包含小写字母
        return false
      }
    }
    // 所有字母都是大写字母
    return true
  }

  message = message.trim()
  if (message.length === 0) {
    return 'Fine. Be that way!'
  } else if (allCapitals(message) && message.endsWith('?')) {
    return "Calm down, I know what I'm doing!"
  } else if (message.endsWith('?')) {
    return 'Sure.'
  } else if (allCapitals(message)) {
    return 'Whoa, chill out!'
  }
  return 'Whatever.'
}

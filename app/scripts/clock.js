export class Clock {

  /**
   * Clock initialization
   */
  constructor() {
    this.totalMinutes, this.totalMs, this.endDate, this.timerInterval
    this.minuteLeft     = document.querySelector('.minute .left .circle')
    this.minuteRight    = document.querySelector('.minute .right .circle')
    this.sound = new Audio('data:audio/wav;base64,' + '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')

    return this
  }

  start(minutes = 60) {
    this.stop()

    this.totalMinutes = minutes
    this.totalMs = this.totalMinutes * 60 * 1000
    this.endDate = new Date()
    this.endDate.setMinutes(this.endDate.getMinutes() + this.totalMinutes)
    this.timer()
    this.timerInterval = setInterval(() => this.timer(), 1000)
  }

  stop() {
    clearInterval(this.timerInterval)
    this.minuteLeft.style.display = 'none'
    this.minuteRight.style.display = 'none'
    this.sound.pause()
    this.sound.currentTime = 0
  }

  /**
   * Timer of the clock
   */
  timer() {
    this.sethandRotation()
  }

  /**
   * Changes the rotation of the hands of the clock
   * @param  {HTMLElement} hand   One of the hand of the clock
   * @param  {number}      degree degree of rotation of the hand
   */
  sethandRotation() {
    let time = Date.parse(this.endDate) - Date.parse(new Date())
    let minutes, seconds, percentage, degree, minuteBody

    minuteBody =  this.minuteRight
    seconds = Math.floor( (time/1000) % 60 )
    minutes = Math.floor( (time/1000/60) % 60 )

    if(minutes > 0 && minutes < 30) {
      minuteBody.style.display = 'none'
      minuteBody = this.minuteLeft
    } else if(minutes <= 0 && time < this.totalMs) {
      this.playSound()
      this.stop()

      return
    }

    // if(time == this.totalMs) {
    //   return
    // }

    percentage = this.numberToPercentage(minutes, 60)
    degree = -this.percentageToDegree(percentage)
    minuteBody.style.transform  = `rotate(${degree}deg)`
    this.showOrHideSides(percentage)
  }

  /**
   * Converting a number to a percentage
   * @param  {number} number Number
   * @param  {number} max    Maximum value of the number
   * @return {number}        Return a percentage
   */
  numberToPercentage(number = 0, max = 60) {
    return (number / max) * 100
  }

  /**
   * Converting a percentage to a degree
   * @param  {number} percentage Percentage
   * @return {number}            Return a degree
   */
  percentageToDegree(percentage = 0) {
    return (percentage * 360) / 100
  }

  /**
   * Show or Hide each side based on the percentage
   * @param  {number} percentage Percentage
   */
  showOrHideSides(percentage = 0) {
    if(percentage === 0) {
      this.minuteLeft.style.display = 'block'
      this.minuteRight.style.display = 'block'
      this.minuteRight.style.transform  = 'rotate(-360deg)'
      this.minuteLeft.style.transform  = 'rotate(-180deg)'
    } else if(percentage < 50) {
      this.minuteLeft.style.display = 'block'
      this.minuteRight.style.display = 'none'
      this.minuteRight.style.transform  = 'rotate(-360deg)'
    } else {
      this.minuteLeft.style.display = 'block'
      this.minuteRight.style.display = 'block'
      this.minuteLeft.style.transform  = 'rotate(-180deg)'
    }
  }

  playSound() {
    let times = 6
    let loop = setInterval(repeat, 750)
    let sound = this.sound
    sound.volume = 1.0

    function repeat() {
      times--

      if (times === 0) {
        clearInterval(loop)
      }

      sound.play()
    }
  }
}

class Countdown {
    constructor(endDate) {
        this.endDate = endDate;
        this.elements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };
    }

    calculate() {
        const now = new Date();
        const difference = this.endDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
    }

    padNumber(number) {
        return number.toString().padStart(2, '0');
    }

    update() {
        const time = this.calculate();
        
        Object.keys(this.elements).forEach(unit => {
            this.elements[unit].textContent = this.padNumber(time[unit]);
        });
    }

    start() {
        this.update();
        setInterval(() => this.update(), 1000);
    }
}

// Initialize countdown
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 13);
const countdown = new Countdown(launchDate);
countdown.start();
class TelegramForm {
      constructor() {
        this.botToken = '8322618758:AAGtPvPhR9E8uZZ2gO4vHTTF546EQzL2dUk'; 
        this.chatId = '1049218084'; 
        this.apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
        this.form = document.getElementById('contactForm');
        this.phoneInput = document.getElementById('phone');
        this.init();
      }

      init() {
        this.form.addEventListener('submit', e => this.handleSubmit(e));
      }

      async handleSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(this.form).entries());
        if (!data.name) {
          console.log('⚠️ Заполните обязательные поля.');
          return;
        }


        const text = `
<b>Новая заявка с портфолио</b>

👤 Имя: ${data.name}
${data.email ? `Email: ${data.email}` : ''}
${data.message ? `Сообщение: ${data.message}` : ''}

Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Bishkek' })}
        `.trim();

        try {
          const res = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: this.chatId, text, parse_mode: 'HTML' })
          });
        } catch (err) {
          console.error(err);
        }
      }

      setStatus(msg) {
        this.status.textContent = msg;
      }
    }

    document.addEventListener('DOMContentLoaded', () => new TelegramForm());
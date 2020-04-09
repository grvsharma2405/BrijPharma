import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class = "hero is-primary is-bold is-dark">
      <div class = "hero-body">
        <div class = "container">
          <h1 class = "title">Contact Us</h1>
        </div>
      </div>
    </section>

    <section class = "section">
      <div class = "container">
        <!-- Contact Form -->
        <form>
          <!-- Name -->
          <div class = "field">
            <label class = "label">Name</label>
            <input type = "text" name = "name" class = "input">
          </div>

          <!-- Email -->
          <div class = "field">
             <label class = "label">Email</label>
             <input type = "email" name = "email" class = "input">
          </div>

          <!-- Message -->
          <div class = "field">
             <label class = "label">Your Message</label>
             <textarea name = "message" class = "textarea"></textarea>
          </div>

          <!-- Submit -->
          <button type = "submit" class = "button is-large is-warning">
            Send
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/logo.jpg') !important;
      background-size: 500px 150px;
      background-color: black;
      background-repeat: no-repeat;
      background-position: center;
    },
    .section {
      background-color: black;
    }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

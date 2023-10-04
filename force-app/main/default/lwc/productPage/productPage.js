import { LightningElement } from 'lwc';

export default class ProductPage extends LightningElement {

    homeClick() {
        this.showContent('main');
    }

    shopClick() {
        this.showContent('trend');
    }

    blogClick() {
        this.showContent('blogs');
    }

    aboutClick() {
        this.showContent('about');
    }

    contactClick() {
        this.showContent('contact');
    }

    showContent(contentName) {
        const contentSections = ['main', 'trend', 'blogs', 'about', 'contact'];

        contentSections.forEach(section => {
            const sectionElement = this.template.querySelector(`.${section}`);
            if (section === contentName) {
                sectionElement.style.display = 'block';
            } else {
                sectionElement.style.display = 'none';
            }
        });

        const navLinks = this.template.querySelectorAll('ul li a');
        navLinks.forEach(link => {
            if (link.dataset.target === contentName) {
                link.style.color = 'rgb(2, 173, 173)';
            } else {
                link.style.color = 'black';
            }
        });
    }
}
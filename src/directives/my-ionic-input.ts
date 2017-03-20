import { Directive, ElementRef, Input } from '@angular/core';

    @Directive ({
        selector: '[myIonicInput]',
        host: {
            '(mouseenter)' : 'onMouseEnter()',
            '(mouseleave)' : 'onMouseLeave()'
        }
    })

    export class MyIonicInputDirective {
        @Input ('myIonicInput') myStyles: any;
        
        constructor(private el: ElementRef){
        //Permite cachar un evento
        el.nativeElement.onkeypress = function(e){
            if('\\!"#$%&/()=?¡-.,_:;{´+*[]}─|@·~½¬|°'.includes(String.fromCharCode(e.keyCode))){
                e.preventDefault();
                return;
            }
        }
    }

        onMouseEnter() {
            this.myStyles.showUsername = true;
        }

        onMouseLeave(){
            this.myStyles.showUsername = false;
        }
    }
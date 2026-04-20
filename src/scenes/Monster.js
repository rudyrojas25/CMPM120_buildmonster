class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        this.Skey = null;
        this.Fkey = null;
        this.Akey = null;
        this.Dkey = null;
        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rarmX = 375;
        this.rarmY = 400;

        this.larmX = 225;
        this.larmY = 400;

        this.rlegX = 325;
        this.rlegY = 455;

        this.llegX = 275;
        this.llegY = 455;

        this.mouthX = 300;
        this.mouthY = 350;
        
        this.leyeX = 250;
        this.leyeY = 310;

        this.reyeX = 350;
        this.reyeY = 310;

        this.hairX = 300;
        this.hairY = 250;

        this.fangsX = 300;
        this.fangsY = 350;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let Skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let Fkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.rightarm = this.add.sprite(this.rarmX, this.rarmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftarm = this.add.sprite(this.larmX, this.larmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftarm.flipX = true;

        my.sprite.rightleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_yellowB.png");
        my.sprite.leftleg = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_yellowB.png");
        my.sprite.leftleg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowD.png");

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        
        my.sprite.righteye = this.add.sprite(this.reyeX, this.reyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.lefteye = this.add.sprite(this.leyeX, this.leyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.lefteye.flipX = true;

        my.sprite.hair = this.add.sprite(this.hairX, this.hairY, "monsterParts", "arm_darkB.png");
        my.sprite.hair.angle = 90;

        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouthB.png");

        Skey.on('down', (key, event) => {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        });

        Fkey.on('down', (key, event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.Akey.isDown) {
            this.move(my.sprite, -10)
        }
        if (this.Dkey.isDown) {
            this.move(my.sprite, 10)
        }
        //move(sprites, dist) {
            //for let sprite of Object.values(sprites) {
            //  sprite.x = sprite.x + dist
            //}
        //} needs to move across screen as long as button is held down
       
    }

    move(sprites, dist) {
        for (let sprite of Object.values(sprites)) {
            sprite.x = sprite.x + dist;
        }
    }

}
var five = require("johnny-five"),
board=new five.Board(),
led1,led2,lcd,vent,motor;
module.exports=(app)=>{
    app.get("/led/:color",(req,res)=>{
        let color=req.params.color;
       
        
        res.json({msg:"request successful led"})
        
            console.log(board);
            led1 = new five.Led(4);
            led1.strobe(5000); 
            led2.stop().off();
            motor.stop().off();
            vent.stop().off();
            lcd.clear();
            
           // led = new five.Led(8);
           // led.on(2000);
          
        console.log("loaded");
        
    
    });

    app.get("/green",(req,res)=>{
      
        
        res.json({msg:"request successful green"})

        led2 = new five.Led(2); 
        led2.strobe(5000); 
        led1.stop().off();
        motor.stop().off();
        vent.stop().off();
        lcd.clear();
    })

    app.get("/lcd/:texto",(req,res)=>{
        let texto=req.params.texto;
        console.log(texto);
       
         lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });
        //lcd.print("POLYMER");
        lcd.cursor(0, 0).print(texto);
       //webstorm
       led1.stop().off();
       led2.stop().off();
       motor.stop().off();
       vent.stop().off();

       
    })

    app.get("/lcdP/:texto", (req, res) => {

        lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });
        let texto=req.params.texto;
        //lcd.print("POLYMER");
        lcd.cursor(0, 0).print(texto);
        //webstorm
        led1.stop().off();
        led2.stop().off();
        motor.stop().off();
        vent.stop().off();


    })

    app.get("/air",(req,res)=>{
      
        
        res.json({msg:"request successful green"})

        vent = new five.Led(5); 
        vent.strobe(10000); 
        led1.stop().off();
        led2.stop().off();
        motor.stop().off();
        lcd.clear();
    })
    
    app.get("/motor",(req,res)=>{
      
        
        res.json({msg:"request successful green"})

        motor = new five.Led(6); 
        motor.strobe(10000); 
        led1.stop().off();
        led2.stop().off();
        vent.stop().off();
        lcd.clear();
    })
}


  
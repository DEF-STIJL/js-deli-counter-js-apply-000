var katzDeli = [];

takeANumber (katzDeliLine, "Ada"); (1)
takeANumber (katzDeliLine, "Grace"); (2)
takeANumber (katzDeliLine, "Kent"); (3)

currentLine(katzDeliLine);(["Ada", "Grace", "Kent"]);
    });
});


nowServing (katzDeliLine);

currentLine(katzDeliLine);

takeANumber(katzDeliLine, "Matz");

currentLine(katzDeliLine);

nowServing (katzDeliLine);

currentLine(katzDeliLine);

 expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });
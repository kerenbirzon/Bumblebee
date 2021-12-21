var messagesFromServer;
getFromServerJson();

//Function that read messages from jason
async function getFromServerJson() 
{
    const jsonPromise = await fetch("./ServerData/data.json");
    messagesFromServer = await jsonPromise.json();
    let interval = 0;
    for (const message of messagesFromServer) 
    {
        interval += message.visableFor;
    }
    
    messsagesLoop();
    setInterval(messsagesLoop, interval*100);
}

// Function that swap messages accroding the time we have define in the jason for each message
async function messsagesLoop() 
{
    for (const message of messagesFromServer)
     {
        displayMessage(message);
        await sleep(message.visableFor);
    }
}

//Function that display message from jason in JQuery
function displayMessage(message)
 {
    $("#template").load(message.templateSrc, () => {
        $("#title").html(message.title);
        $("#textFields").html(message.textFields);

        var imagesElements = [];
        for (const imgSrc of message.images)
         {
            var img = '<img src="' + imgSrc + '" class="imgSize">'
            imagesElements.push(img);
        }
        $("#images").html(imagesElements)
    });
}

const sleep = (seconds) =>  new Promise(resolve => setTimeout(resolve, seconds * 100));
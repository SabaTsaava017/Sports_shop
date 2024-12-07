        function navigatePage() {
            const inputText = document.getElementById("search-bar").value.toLowerCase().trim();
            const [sport, product] = inputText.split(",").map(item => item.trim());

            
            const sportPages = {
                "ფეხბურთი": "Football.html",
                "კალათბურთი": "basketball.html",
                "რაგბი": "Rugby.html",
                "ბოქსი": "boxing.html",
                "ჩოგბურთი": "tennis.html"
            };

            
            const productPages = {
                "ფეხბურთი": {
                    "მაისურები": "formebi.html",
                    "ბურთები": "burtebi.html",
                    "ბუცები": "bucebi.html",
                    "მეკარის ხელთათმანები": "mekare.html"
                },
                "კალათბურთი": {
                    "მაისურები": "formebi_Bask.html",
                    "ბოტასები": "Botasebi_Bask.html",
                    "ბურთები": "basketball_ball.html"
                },
                "რაგბი": {
                    "მაისურები": "Rugby_T-shirts.html",
                    "ბურთები": "Rugby-Burtebi.html",
                    "ბუცები": "Rugby_bucebi.html"
                },
                "ბოქსი": {
                    "ბოქსის გრუშები": "boxing-bags.html",
                    "ბოქსის ხელთათმანები": "boxing-gloves.html",
                    "კაპები": "boxing-mouthguards.html",
                    "ჩაფხუტები": "boxing-helmets.html",
                    "ბოქსის ფეხსაცმელი": "boxing-shoes.html"
                },
                "ჩოგბურთი": {
                    "ჩოგნები": "tennis-rackets.html",
                    "ბურთები": "tennis-balls.html",
                    
                }
            };

            if (sport && !product) {
                
                if (sportPages[sport]) {
                    window.location.href = sportPages[sport];
                } else {
                    alert("სპორტის სახელი ვერ მოიძებნა!");
                }
            } else if (sport && product) {
                
                if (productPages[sport] && productPages[sport][product]) {
                    window.location.href = productPages[sport][product];
                } else {
                    alert("სპორტის ან პროდუქტის გვერდი ვერ მოიძებნა!");
                }
            } else {
                alert("გთხოვთ, ჩაწეროთ სპორტის სახელი ან სპორტისა და პროდუქტის დასახელება.");
            }
        }







        
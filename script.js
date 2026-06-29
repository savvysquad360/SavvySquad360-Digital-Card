function shareCard() {
    if (navigator.share) {
        navigator.share({
            title: "SavvySquad360 Digital Business Card",
            text: "Check out our Digital Business Card",
            url: "https://savvysquad360.github.io/SavvySquad360-Digital-Card/"
        });
    } else {
        navigator.clipboard.writeText("https://savvysquad360.github.io/SavvySquad360-Digital-Card/");
        alert("Link copied to clipboard!");
    }
}
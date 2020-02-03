describe("The tutorial", () => {
    it("should exp", () => {
        browser.url("http://explorecalifornia.org/contact.htm");

        $("#name").waitForEnabled(3000);
        $("#comments").waitForEnabled(3000);

        $("#name").setValue("Marvelous Marvin");
        $("#state").selectByVisibleText("Texas");

        var backpack = $("#backpack");
        browser.execute("arguments[0].scrollIntoView();", backpack);
        backpack.click();

        $("#newsletter_yes").click();        

        $("#name").getValue().should.equal("Marvelous Marvin");
        $("#state").getValue().should.equal("TX");
        backpack.isSelected().should.equal(true);
        $("#newsletter_yes").isSelected().should.equal(true);

    });
});
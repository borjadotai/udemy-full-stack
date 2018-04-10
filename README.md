# 🚀📝Emaily - email survey service for startups!
**Checkout the video where I showcase it's functionality!**
[![VIDEO](https://i.imgur.com/0pHvilS.png)](https://www.youtube.com/watch?v=6jMhy9LFtiE)

### As part of my Udemy course for Full Stack Web Development, I created a platform using Node, React, Redux and Mongo among others.

### I explain everything in the video but it's functionality is mainly the following:

**STACK: NodeJS (back end), React (front end), Redux (state management), MongoDB (database), Heroku (deployment)**

1. Register and Login using Passport.js and Google Plus Authentication Strategy (**Google API**)
2. Buy credits to create email campaignes and surveys (Using **Stripe API**)
3. Once you have credits (checking with middleware), you'll be able to create a survey.
4. You can preview the survey you've created before sending (state handleing **Redux & Redux Form**)
5. You can send the survey (**sendgrid API**) 
6. Once the survey has been sent, when the user clicks on either 'yes' or 'not', sendgrid will send that response to our backend (through the set up **webhook** and this works even in localhost since we use **localtunnel**)
7. Our backend updates the DB and that is reflected in our front end since the update modifies the state of our Redux store.

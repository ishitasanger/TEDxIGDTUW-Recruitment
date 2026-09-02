# TEDxIGDTU Recruitment Portal

## What I Built

I built a web-based recruitment portal for TEDxIGDTU as an alternative to a traditional Google Form.

The recruitment flow is designed as:

**Explore → Discover → Match → Apply**


### Current Features

Students can currently:

- Explore the different TEDxIGDTU teams and understand their roles.
- Use an interactive **"Find Your Team"** quiz if they are unsure where they fit.
- Receive a team recommendation based on their quiz responses.
- Select up to **two team preferences** without being able to select the same team twice.
- Fill out a structured recruitment application.
- Track application completion using a dynamic **progress bar**.
- Save their application draft in the browser using **Local Storage**.
- Submit their application and receive a confirmation screen.

The teams showcased in the portal are:

- Web Development
- Sponsorship & Strategic Alliance
- Media & Communication
- Community & Delegate Affairs
- Creative Strategy & Design
- Content & Writing
- Events, Brands & People

## Problem & Why This Feature?

I identified that students may be interested in joining TEDxIGDTU but may not know:

- What each team actually does.
- What kind of work and responsibilities are involved in each team.
- Which team matches their interests and skills.
- What they can expect to work on after joining.
- What previous teams have worked on during TEDxIGDTU events.

A traditional Google Form mainly focuses on collecting responses and does not provide much context or interaction before the application.

Instead of simply replacing the Google Form with another form, I wanted to make the recruitment experience more informative and interactive.

The portal is designed to help students **understand the teams first and apply second**.

The **Find Your Team** matcher provides an additional way for students who are unsure about their fit to discover a suitable team based on their interests.

With more time, the team discovery section would be expanded further to include detailed team responsibilities, examples of previous work and events, relevant skills, and a clearer picture of what working in each team is actually like.


## Key Technical & Design Decisions

### HTML, CSS & JavaScript

I used HTML, CSS and JavaScript to keep the prototype lightweight and achievable within the 60–90 minute assessment constraint.

### Interactive Team Matcher

The **Find Your Team** quiz uses a simple scoring system. Each answer is associated with a team, and the team with the highest score is recommended to the student.

This gives students a quick way to discover a team rather than having to decide purely from a list.

### Two Team Preferences

Students can select up to two teams as their preferences. The interface also prevents the same team from being selected as both preferences.

### Local Storage

I used the browser's `localStorage` to save the student's application data.

This allows the student to refresh the page or temporarily leave the website without immediately losing their entered information.

Since this is a prototype, I intentionally chose Local Storage instead of introducing a backend/database within the given time constraint.

### Progress Bar

The application includes a dynamic progress bar that updates as the student completes the form, providing immediate feedback about their progress.

### UI/UX

The interface uses a TEDx-inspired visual style with:

- Dark background
- Red accent colour
- Gold decorative elements
- Clear call-to-action buttons
- Smooth scrolling
- Interactive modal for the team matcher
- Responsive layouts

## AI Tools Used

AI tools were used as a development aid for:

- Understanding HTML, CSS and JavaScript concepts.
- Generating and refining parts of the initial implementation.
- Debugging implementation issues.
- Iterating on the UI and visual design.

I tested and modified the generated code while developing the feature and reviewed the logic used in the final implementation.

## Screenshots

### Landing Page

![alt text](image.png)

### Team Showcase

![alt text](image-6.png)
![alt text](image-2.png)

### Team Matcher

![alt text](image-3.png)

### Recruitment Form

![alt text](image-4.png)

### Confirmation

![alt text](image-5.png)

## What I Would Improve With More Time

Due to the 60–90 minute constraint, I focused on building a functional frontend prototype.

With more time, I would add:
- **Detailed Team Discovery:** Expand the team showcase into a more detailed discovery experience where students can learn exactly what each TEDxIGDTU team does, the kind of work and responsibilities involved, skills that are useful for the team, examples of work from previous events, and what a student can expect after joining. This would help students make informed team preferences instead of choosing a team based only on its name.
- **Backend/database integration** for securely storing applications.
- **Admin dashboard** for the TEDx team to view and manage applications.
- **Application Status & Interview Notifications:** Add an applicant dashboard where students can track their application through stages such as **Submitted → Under Review → Shortlisted → Interview Scheduled → Selected/Not Selected**. When a student is shortlisted, they would receive an interview notification with the relevant details. **Further interview details and communication would be handled through WhatsApp.**
- Team-specific application questions based on the selected preferences.
- Email confirmation after application submission.
- Authentication for applicants and administrators.
- Improved form validation and accessibility.
- More refined animations and micro-interactions.

## Deployment

**Live Demo:**  
https://tedxigdtuwrecruitmentportal-alpha.vercel.app/

## Repository

**GitHub:**  
https://github.com/ishitasanger/TEDxIGDTUW-Recruitment
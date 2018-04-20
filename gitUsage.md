# Git Feature Branches and Dev

How to create branches off dev, if we merge back into dev then we keep master clean and slowly merge dev into master when we have reached key milestones and the code is stable. Make branches off dev to work on features.

---

### Keeping up to date

Make sure you pull down all the latest changes to dev so you're upto date, Git won't be able to tell you if you're behind dev when you git status.

```bash
$ git pull
```

---

### Creating Feature Branches from Dev

Create <MyNewFeatureBranch> branch off of dev and switch into it:

```bash
$ git checkout -b <myNewFeatureBranch> dev
```

Edit files, add and commit your changes as normal in the new feature branch.

Then push with the -u (short for --set-upstream) option, to push your new feature branch and setup remote tracking Git will set up the tracking information during the push:

```bash
$ git push -u origin <myNewFeatureBranch>
```

When finished: use 'git checkout' command to switch to the dev branch:

```bash
$ git checkout dev
```

and when on the dev branch merge in your feature branch:

```bash
$ git merge <myNewFeatureBranch>
```

Now push changes to the server:

```bash
$ git push origin dev
```

#Git Feature Branches and Dev

How to create branches off dev, if we merge back into dev then we keep master clean and slowly merge dev into master when we have reached key milestones and the code is stable. Make branches off dev to work on features.

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

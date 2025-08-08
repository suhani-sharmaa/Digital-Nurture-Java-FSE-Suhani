C:\Users\Dell>git checkout main
fatal: not a git repository (or any of the parent directories): .git

C:\Users\Dell>git clone https://gitlab.com/ssuhani2909-group/GitDemo.git
fatal: destination path 'GitDemo' already exists and is not an empty directory.

C:\Users\Dell>cd GitDemo

C:\Users\Dell\GitDemo>git checkout main
branch 'main' set up to track 'origin/main'.
Switched to a new branch 'main'

C:\Users\Dell\GitDemo>git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git_commands.txt

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\Dell\GitDemo>git checkout -b GitWork
Switched to a new branch 'GitWork'

C:\Users\Dell\GitDemo>echo "<message>Hello from GitWork branch</message>" > hello.xml

C:\Users\Dell\GitDemo>git add hello.xml

C:\Users\Dell\GitDemo>git commit -m "Add hello.xml in GitWork branch"
[GitWork 5abce8a] Add hello.xml in GitWork branch
 1 file changed, 1 insertion(+)
 create mode 100644 hello.xml

C:\Users\Dell\GitDemo>echo "<message>Hello updated in GitWork branch</message>" > hello.xml

C:\Users\Dell\GitDemo>git status
On branch GitWork
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   hello.xml

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git_commands.txt

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\Dell\GitDemo>git add hello.xml

C:\Users\Dell\GitDemo>git commit -m "Update hello.xml in GitWork branch"
[GitWork 02f35b8] Update hello.xml in GitWork branch
 1 file changed, 1 insertion(+), 1 deletion(-)

C:\Users\Dell\GitDemo>git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

C:\Users\Dell\GitDemo>echo "<message>Hello from main branch</message>" > hello.xml

C:\Users\Dell\GitDemo>git add hello.xml

C:\Users\Dell\GitDemo>git commit -m "Add hello.xml in main branch"
[main 37cb777] Add hello.xml in main branch
 1 file changed, 1 insertion(+)
 create mode 100644 hello.xml

C:\Users\Dell\GitDemo>git log --oneline --graph --decorate --all
* 37cb777 (HEAD -> main) Add hello.xml in main branch
| * 02f35b8 (GitWork) Update hello.xml in GitWork branch
| * 5abce8a Add hello.xml in GitWork branch
|/
| *   9d8984b (origin/master, master) Merge branch 'main' of https://gitlab.com/ssuhani2909-group/GitDemo
| |\
| |/
|/|
* | f0f9402 (origin/main) Initial commit
 /
* 10ae128 Added welcome.txt file

C:\Users\Dell\GitDemo>git diff main GitWork
diff --git a/hello.xml b/hello.xml
index 56f4832..eb528a6 100644
--- a/hello.xml
+++ b/hello.xml
@@ -1 +1 @@
-"<message>Hello from main branch</message>"
+"<message>Hello updated in GitWork branch</message>"

C:\Users\Dell\GitDemo>git merge GitWork
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.

C:\Users\Dell\GitDemo>git mergetool

This message is displayed because 'merge.tool' is not configured.
See 'git mergetool --tool-help' or 'git help config' for more details.
'git mergetool' will now attempt to use one of the following tools:
tortoisemerge emerge vimdiff nvimdiff
Merging:
hello.xml

Normal merge conflict for 'hello.xml':
  {local}: created file
  {remote}: created file
Hit return to start merge resolution tool (vimdiff):
3 files to edit

C:\Users\Dell\GitDemo>git add hello.xml

C:\Users\Dell\GitDemo>git commit -m "Merge GitWork into main with conflict resolved"
[main 94cd37f] Merge GitWork into main with conflict resolved

C:\Users\Dell\GitDemo>git status
On branch main
Your branch is ahead of 'origin/main' by 4 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git_commands.txt
        hello.xml.orig

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\Dell\GitDemo>echo "*.bak" >> .gitignore

C:\Users\Dell\GitDemo>git add .gitignore

C:\Users\Dell\GitDemo>git commit -m "Add backup file pattern to .gitignore"
[main 5dcc2dd] Add backup file pattern to .gitignore
 1 file changed, 1 insertion(+)
 create mode 100644 .gitignore

C:\Users\Dell\GitDemo>git branch -a
  GitWork
* main
  master
  remotes/origin/main
  remotes/origin/master

C:\Users\Dell\GitDemo>git branch -d GitWork
Deleted branch GitWork (was 02f35b8).

C:\Users\Dell\GitDemo>git log --oneline --graph --decorate
* 5dcc2dd (HEAD -> main) Add backup file pattern to .gitignore
*   94cd37f Merge GitWork into main with conflict resolved
|\
| * 02f35b8 Update hello.xml in GitWork branch
| * 5abce8a Add hello.xml in GitWork branch
* | 37cb777 Add hello.xml in main branch
|/
* f0f9402 (origin/main) Initial commit

C:\Users\Dell\GitDemo>git status
On branch main
Your branch is ahead of 'origin/main' by 5 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        git_commands.txt
        hello.xml.orig

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\Dell\GitDemo>
echo Go to the Admin Front Project
cd /home/AdvancedWebProject/front-end/admin-front

echo Start building project...
ng build --prod
echo Building finished.
cd ./dist/

echo Remove previous deployed folder...
rm -r /var/www/angular-deploy-admin

echo Create new deploying folder...
mkdir /var/www/angular-deploy-admin

echo Move deployable files...
mv ./admin-front/* /var/www/angular-deploy-admin

cd ..
rm -r ./dist

echo Finished server configurations. 
echo Thank You.
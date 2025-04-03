#initial command - scripts are blocked on school pcs
#npx create-expo-app --template

$env:PATH += ";C:\Users\lwilmoth\AppData\Roaming\npm"
$env:ANDROID_HOME = "C:\Users\lwilmoth\AppData\Local\Android\Sdk"
$env:PATH += ";" + $ANDROID_HOME + "\emulator"
$env:PATH += ";" + $ANDROID_HOME + "\platform-tools"
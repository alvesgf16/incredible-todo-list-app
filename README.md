# System Requirements

- **CPU:**  12th Gen Intel(R) Core(TM) i7-12700H   2.30 GHz
- **RAM size:**	16.0 GB (15.6 GB usable)
- **System type:**	64-bit operating system, x64-based processor
- **Windows Version:** Windows 11 Home 23H2
- **Windows PowerShell Version:** 5.1.22621.4111

# Installation Instructions

To develop a React Native app for Android, you will need to install Node, the React Native command line interface, a Java SE Development Kit (JDK), and Android Studio.

It's recommended to use Chocolatey to install Node and the JDK on Windows. When installing Node, make sure to use the LTS version or at least 18.18. You may want to consider using [**nvm-windows**](#resources) to switch between different Node versions.

Additionally, it's advisable to use JDK 17 to prevent potential issues with higher JDK versions.

While you can use any text editor of your choice for app development, you must install Android Studio to set up the required tools for building your React Native app for Android.

Android Studio installs the latest Android SDK by default. However, building a React Native app with native code requires the ```Android 14.0 ("UpsideDownCake")``` SDK in particular.

## 1. Install Chocolatey

1. Ensure that you are running Windows PowerShell/Terminal as **administrator**.
2. Run ```Get-ExecutionPolicy```. If it returns ```Restricted```, run ```Set-ExecutionPolicy AllSigned``` OR ```Set-ExecutionPolicy Bypass -Scope Process```.
3. Copy the following command, paste it into your shell and press Enter:
   ```
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```
4. Wait a few seconds for the command to complete.
5. Type ```choco``` or ```choco -?```.
   - If you don't see any errors, you are ready to use Chocolatey!

## 2. Install Node and JDK

1. Run the following command:
   ```
   choco install -y nodejs-lts microsoft-openjdk17
   ```

### 3. Install Android Studio

1. [Download Android Studio](https://developer.android.com/studio/index.html).
2. Start the Android Studio installation wizard
3. Make sure the boxes next to all of the following items are checked:
   - Android Studio
   - Android Virtual Device
4. Click "Next" to install all of these components.
5. Once setup has finalized, start Android Studio.

### 4. Install the Android SDK

1. On Android Studio's Welcome screen, click on "More Actions" button and select "SDK Manager".
   - The SDK Manager can also be found within the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK.
2. On the "SDK Platforms" tab, check the box next to "Show Package Details" in the bottom right corner.
3. Look for and expand the ```Android 14.0 ("UpsideDownCake")``` entry, then make sure the following items are checked:
   - ```Android SDK Platform 34```
   - ```Intel x86_64 Atom System Image``` OR ```Google APIs Intel x86_64 Atom System Image```
4. Select the "SDK Tools" tab and check the box next to "Show Package Details" here as well.
5. Look for and expand the ```Android SDK Build-Tools``` entry, then make sure that ```34.0.0``` is selected.
6. Click "Apply" to download and install the Android SDK and related build tools.

# Configuration Steps

The React Native tools require some environment variables to be set up in order to build apps with native code.

## 1. Configure the ANDROID_HOME environment variable

1. Open the **Windows Control Panel**.
2. Click on **User Accounts**, then click **User Accounts** again.
3. Click on **Change my environment variables**.
4. Click on **New...** to create a new ```ANDROID_HOME``` user variable that points to the path to your Android SDK.
   - The SDK is installed, by default, at the following location:
     ```
     C:\Users\<Your username>\AppData\Local\Android\Sdk
     ```
   - You can find the actual location of the SDK in [the same window where you installed the Android SDK](#4-install-the-android-sdk).
5. Open a new Terminal window.
6. Copy and paste ```Get-ChildItem -Path Env:\``` into it.
7. Verify ```ANDROID_HOME``` has been added.
    
## 2. Add platform-tools to Path

1. Open the **Windows Control Panel**.
2. Click on **User Accounts**, then click **User Accounts** again.
3. Click on **Change my environment variables**.
4. Select the **Path** variable.
5. Click **Edit**.
6. Click **New** and add the path to platform-tools to the list.
   - The default location for this folder is:
     ```
     C:\Users\<Your username>\AppData\Local\Android\Sdk\platform-tools
     ```

# Project Creation

2. To create a new project with only the minimum required dependencies installed and no navigation configuration, run the following command:
   ```
   npx create-expo-app@latest --template blank
   ```

# Running the Project

To run your React Native Android app, you'll need an Android device or an Android Virtual Device. Either way, the device must be prepared to run Android apps for development.

## 1. Install expo-dev-client

1. Navigate to the project directory:
   ```
   cd IncredibleTodoListApp
   ```
2. Run the following command:
   ```
   npx expo install expo-dev-client
   ```

## 2a. Using a physical device

Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB debugging on your device in order to install your app during development.

### 1. Enable Debugging over USB

1. Enable the "Developer options" menu by going to **Settings → About phone → Software information** and then tapping the ```Build number``` row seven times
2. Go back to **Settings → Developer options** to enable "USB debugging".

### 2. Plug in your device via USB

1. Plug in your device via USB to your development machine.
2. Check that your device is properly connecting to ADB, the Android Debug Bridge, by running ```adb devices``` on the Command Prompt (not Windows Powershell).
   ```
   $ adb devices
   List of devices attached
   14ED2FCC device
   ```
   - Seeing ```device``` in the right column means the device is connected.
   - You must have **only one device connected** at a time.

## 2b. Using a virtual device

**If you already have an Android Virtual Device (AVD), go straight to step 2**

### 1. Create a New AVD

1. From the Android Studio Welcome screen, select **More Actions → Virtual Device Manager**.
   - In case you already opened a project, select **View → Tool Windows → Device Manager** from the main menu bar.
2. Click the **+**, and then click **Create Virtual Device**.

### 2. Start the AVD

1. From the device manager panel, click the triangle button next to your AVD to launch it.

## 3. Run your app

1. From the root of your project, run the following in the Terminal:
   ```
   npx expo run:android
   ```

# Troubleshooting

## Upgrading Gradle for Compatibility with Latest JDK

If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to ```{project root folder}\android\gradle\wrapper\gradle-wrapper.properties``` and changing the ```distributionUrl``` value to upgrade the Gradle version. You can check out [here](https://gradle.org/releases/) the latest releases of Gradle.

## Resolving Issues Connecting to Android Device with ADB

If when trying to connect to your physical device using adb, you get an error similar to the one below, check possible solutions [here](https://stackoverflow.com/questions/33316006/adb-error-error-protocol-fault-couldnt-read-status-invalid-argument).
```
error: protocol fault (couldn't read status): connection reset
```

# Resources

- [React Native Documentation](https://reactnative.dev/docs/environment-setup)
- [Chocolatey](https://chocolatey.org/install)
- [How to Open the Command Prompt as Administrator in Windows 10](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-10/)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [Node's Downloads Page](https://nodejs.org/en/download/)
- [JDK 17](https://openjdk.org/projects/jdk/17/)
- [Expo Documentation](https://docs.expo.dev/)
- [Create and manage virtual devices](https://developer.android.com/studio/run/managing-avds)

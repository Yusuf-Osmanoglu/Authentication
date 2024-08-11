# Authentication

## Overview

Authentication, web uygulamalarında kullanıcı kimlik doğrulama ve yetkilendirme işlemlerini kolaylaştıran bir projedir. Bu proje, kullanıcı kayıt, giriş ve güvenli oturum yönetimi gibi temel kimlik doğrulama işlevlerini sağlar.

## Features

- 🔐 **Kullanıcı Kaydı: user2 şifre:123456
- 🔑 **Giriş Yapma:** Kullanıcılar mevcut hesaplarıyla güvenli bir şekilde giriş yapabilir.
- 🛡️ **Token Tabanlı Kimlik Doğrulama:** JWT (JSON Web Token) kullanarak kullanıcı oturumlarını yönetir.
- 🔄 **Oturum Yenileme:** Kullanıcıların oturum sürelerini yönetir ve yeniler.
- 🧩 **Modüler Yapı:** Kimlik doğrulama sistemini mevcut projelere kolayca entegre edebilirsiniz.

## Installation

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Bu repository'yi klonlayın:

    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/Authentication.git
    cd Authentication
    ```

2. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

3. Uygulamayı başlatın:

    ```bash
    npm start
    ```

    Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## Usage

1. Yeni bir kullanıcı hesabı oluşturun veya mevcut bir hesapla giriş yapın.
2. Giriş yaptıktan sonra, oturum bilgilerinizi kullanarak çeşitli yetkilendirme işlemlerini gerçekleştirin.
3. Oturumunuzu güvenli bir şekilde kapatın.

---

# Authentication

## Overview

Authentication is a project designed to facilitate user authentication and authorization for web applications. This project provides basic authentication functionalities such as user registration, login, and secure session management.

## Features

- 🔐 **User Registration: user2 password:123456
- 🔑 **Login:** Users can log in securely with existing accounts.
- 🛡️ **Token-Based Authentication:** Manages user sessions using JWT (JSON Web Token).
- 🔄 **Session Renewal:** Manages and renews user session durations.
- 🧩 **Modular Structure:** Easily integrate the authentication system into existing projects.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/Authentication.git
    cd Authentication
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000` by default.

## Usage

1. Create a new user account or log in with an existing one.
2. After logging in, use your session credentials to perform various authorization tasks.
3. Log out securely to end your session.

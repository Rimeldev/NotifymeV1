# 🔔 NotifyMe

Assistant intelligent de gestion de conversations WhatsApp/Telegram avec IA

## 🎯 Fonctionnalités

- 📱 Surveillance 24/7 de tous vos messages (groupes + conversations privées)
- 🤖 Résumés IA intelligents des conversations importantes
- 🚨 Alertes SMS critiques pour les messages urgents
- 📊 Dashboard de contrôle pour gérer vos préférences

## 🏗️ Architecture

Ce projet suit une architecture microservices modulaire.

- **api-gateway** : Point d'entrée principal
- **message-service** : Gestion messages WhatsApp/Telegram
- **ai-service** : Intelligence artificielle (Python)
- **user-service** : Gestion utilisateurs
- **sms-service** : Alertes SMS
- **dashboard** : Interface web

## 🚀 Installation

### Prérequis

- Node.js (>=18.0.0)
- Python (>=3.9)
- PostgreSQL (>=14)
- Redis (>=6)
- Git

### Configuration

1. Copiez `.env.example` vers `.env` et configurez vos variables d'environnement:

```bash
cp .env.example .env
```

2. Installez les dépendances Node.js:

```bash
npm install
```

3. Installez les dépendances Python:

```bash
cd apps/ai-service
pip install -r requirements.txt
```

4. Démarrez les services avec Docker Compose:

```bash
docker-compose up -d
```

## 📝 Documentation

Consultez le dossier `docs/` pour plus d'informations:

- [Architecture](docs/ARCHITECTURE.md)
- [API](docs/API.md)
- [Déploiement](docs/DEPLOYMENT.md)

## 🤝 Contribution

Les contributions sont les bienvenues! Veuillez lire les guidelines de contribution avant de soumettre une PR.

## 📄 Licence

Ce projet est sous licence propriétaire.

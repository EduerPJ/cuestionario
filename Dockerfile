ARG WWWGROUP
FROM laravelsail/php80-composer:latest

# Instalar Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

WORKDIR /var/www/html

# Crear usuario con el mismo UID y GID que el usuario en el host
RUN groupadd --gid \${WWWGROUP} sailgroup && \
    useradd --uid \${WWWGROUP} --gid sailgroup --shell /bin/bash sailuser

# Copiar archivos del proyecto
COPY --chown=sailuser:sailgroup . .

# Instalar dependencias de PHP y React
RUN composer install --no-dev && \
    npm ci && \
    npm run production

# Exponer puertos
EXPOSE 80
EXPOSE 5173

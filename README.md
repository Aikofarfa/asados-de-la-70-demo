# Asados Nuevo Milenio — demo web

Propuesta de sitio responsive para **Asados Nuevo Milenio**, restaurante en Robledo, Medellín. El diseño pone en primer plano la parrilla, la carta y una solicitud sencilla de reserva por WhatsApp.

## Ver en local

No requiere instalación ni dependencias. Desde la carpeta del proyecto:

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080`.

## Qué incluye

- Página de una sola vista con presentación del restaurante, carta, ubicación y contacto.
- Navegación móvil y selección de categorías de la carta.
- Formulario que prepara una **solicitud** en WhatsApp al número 304 603 0320. No guarda reservas ni confirma disponibilidad; el cliente debe enviar el mensaje y el restaurante responder.
- Enlace de indicaciones a Google Maps y llamadas a los números incluidos en la cartilla.
- Imágenes gastronómicas originales generadas para esta propuesta; no se presentan como fotografías verificadas del local.

## Datos usados como referencia

Dirección: Cra. 69 # 73-49, Córdoba, Robledo, Medellín, Antioquia.

Teléfonos transcritos de la cartilla: 304 603 0320, 300 802 9191 y 604 442 7679.

Los nombres y precios del menú se tomaron de la cartilla compartida (indica vigencia desde el 2 de octubre de 2026). Deben confirmarse con el restaurante antes de publicar. El valor de domicilio depende de la distancia. No se añadió código QR ni sistema de reservas con backend.

## Antes de usarla como sitio oficial

Confirmar con el negocio la carta y precios vigentes, el domicilio, los datos de contacto y la dirección exacta. Aprobar textos e imágenes y reemplazar cualquier dato incorrecto. El formulario solicita una reserva por WhatsApp; no hay integración de calendario, cupos, base de datos ni confirmación automática.

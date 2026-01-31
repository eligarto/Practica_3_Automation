# Proyecto: Pipeline de Entrega Continua y Calidad

Este repositorio contiene la implementación para la asignatura **Desarrollo de Software 2025/2026**.

## Cómo usar el proyecto

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar Tests (Q1 & Q2)**:
   ```bash
   npm test
   ```

3. **Ejecutar Linter (Q4)**:
   ```bash
   npm run lint
   ```

4. **Compilar (Build)**:
   ```bash
   npm run build
   ```

## Estructura de la Práctica (Para Video)

1. **Gestión de Configuración**: Trunk-Based Development.
2. **Ciclo TDD**: Demostrado con el `CalculatorService`.
3. **Pipeline CI/CD**: Ver `.github/workflows/ci-cd.yml`. Incluye Build, Lint (Q4), Test (Q1/Q2) y Deploy (Staging).
4. **Métricas DORA**: Medimos el tiempo desde commit hasta despliegue verde.



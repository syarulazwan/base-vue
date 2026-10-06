# Vue 3 — Feature-Based Architecture (Recommended)

Use this document as an AI prompt/reference to generate or organize a Vue 3 project using **Feature-Based Architecture**.

## Recommended Folder Structure

```text
src/
├── main.js
├── App.vue
│
├── router/
│   └── index.js
│
├── layouts/
│   ├── AppLayout.vue
│   └── AuthLayout.vue
│
├── core/
│   ├── api/
│   │   └── axios.js
│   ├── constants/
│   └── utils/
│
├── features/
│   ├── auth/
│   │   ├── views/
│   │   │   └── LoginView.vue
│   │   ├── components/
│   │   │   └── LoginForm.vue
│   │   ├── services/
│   │   │   └── authService.js
│   │   └── stores/
│   │       └── authStore.js
│   │
│   └── users/
│       ├── views/
│       ├── components/
│       ├── services/
│       └── stores/
│
└── shared/
    ├── components/
    └── composables/
```

## Architecture Mapping

Use the following mapping when converting MVC-style thinking into Vue 3:

| Concept | Vue 3 Equivalent |
|---|---|
| Model | Data / Types |
| View | Vue Component |
| Controller | Pinia Store / Composable / Methods |
| Service | API Service |

## Example Flow

```text
Component (View)
      ↓
Store Action (Logic)
      ↓
Service (API Call)
      ↓
Update State
      ↓
Component Update
```

## Recommended Approach

- Do **not** use traditional MVC directly for Vue.
- Use **Feature-Based Architecture + Pinia + Service Layer**.
- Suitable for both small and large projects.
- Keep API calls inside `services/`.
- Keep state and reusable business logic inside Pinia stores or composables.
- Keep reusable UI components inside `shared/components/`.
- Keep feature-specific code inside its own folder under `features/`.

## Technical Recommendation

Use:

- Vue 3
- Vue Router
- Pinia
- Axios
- Composition API
- Feature-Based Architecture
- Service Layer
- Reusable Components
- Composables

## AI Implementation Rules

When generating code, follow these rules strictly:

1. Use Vue 3 with Composition API.
2. Organize modules by feature under `src/features/`.
3. Do not place API calls directly inside Vue components.
4. API calls must go inside `services/`.
5. Global Axios configuration must be placed in:

```text
src/core/api/axios.js
```

6. Router configuration must be placed in:

```text
src/router/index.js
```

7. Layout components must be placed in:

```text
src/layouts/
```

8. Authentication-related pages/components/services/stores must be placed inside:

```text
src/features/auth/
```

9. Shared reusable components must be placed inside:

```text
src/shared/components/
```

10. Shared reusable composables must be placed inside:

```text
src/shared/composables/
```

11. Use Pinia for application state.
12. Use services only for API communication.
13. Keep page/view files focused on page composition.
14. Keep UI logic inside components.
15. Keep reusable business logic inside stores or composables.
16. Avoid putting unrelated modules in the same feature folder.
17. Keep naming consistent and predictable.

## Authentication Example

```text
features/auth/
├── views/
│   └── LoginView.vue
├── components/
│   └── LoginForm.vue
├── services/
│   └── authService.js
└── stores/
    └── authStore.js
```

Suggested authentication flow:

```text
LoginView
   ↓
LoginForm
   ↓
authStore Action
   ↓
authService
   ↓
Axios API
   ↓
Update Pinia State
   ↓
Component Update / Redirect
```

## Expected AI Output

When asked to generate a project using this architecture, generate:

1. Complete folder structure.
2. Required npm packages.
3. Axios configuration.
4. Vue Router configuration.
5. Layout setup.
6. Pinia store setup.
7. Authentication store.
8. Authentication service.
9. Login view.
10. Login form component.
11. Protected route example.
12. Example `users` feature.
13. Shared component example.
14. Shared composable example.
15. Clean and maintainable code.

Follow the architecture above strictly.

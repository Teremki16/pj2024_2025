$(document).ready(function() {
    // Функція для форматування дати та часу (без змін)
    function formatDateTime(date) {
        const d = (date instanceof Date) ? date : new Date(date);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return new Intl.DateTimeFormat('uk-UA', options).format(d);
    }

    // Функція для додавання нової замітки до DOM (зміни з попередньої відповіді вже включені)
    function addTodoToDOM(title, text, isArchived = false, createdAt = new Date().toISOString()) {
        const listItem = $('<li>');
        listItem.addClass('todo-item');

        const contentWrapper = $('<div>').addClass('todo-content-wrapper');

        const titleSpan = $('<span>')
            .addClass('todo-title')
            .text(title || '');
        const textSpan = $('<span>')
            .addClass('todo-text')
            .text(text || '');

        const dateSpan = $('<span>')
            .addClass('todo-date')
            .text(formatDateTime(createdAt));

        // Зберігаємо оригінальну дату в data-атрибуті для збереження в localStorage
        dateSpan.data('created-at', createdAt);

        const actionsWrapper = $('<div>').addClass('note-actions');

        const deleteButton = $('<button>')
            .addClass('delete-btn')
            .html('<i class="fas fa-trash-can"></i>');

        let archiveButton;
        if (isArchived) {
            archiveButton = $('<button>')
                .addClass('unarchive-btn')
                .html('<i class="fas fa-folder-open"></i>');
        } else {
            archiveButton = $('<button>')
                .addClass('archive-btn')
                .html('<i class="fas fa-box-archive"></i>');
        }

        contentWrapper.append(titleSpan, textSpan, dateSpan);
        actionsWrapper.append(archiveButton, deleteButton);
        listItem.append(contentWrapper, actionsWrapper);

        if (isArchived) {
            $('#archived-todo-list').append(listItem);
        } else {
            $('#todo-list').append(listItem);
        }
    }

    // Функція для збереження заміток в localStorage (без змін)
    function saveTodos() {
        const todos = [];
        $('#todo-list li').each(function() {
            const title = $(this).find('.todo-title').text();
            const text = $(this).find('.todo-text').text();
            const createdAt = $(this).find('.todo-date').data('created-at') || new Date().toISOString();
            todos.push({ title: title, text: text, archived: false, createdAt: createdAt });
        });
        $('#archived-todo-list li').each(function() {
            const title = $(this).find('.todo-title').text();
            const text = $(this).find('.todo-text').text();
            const createdAt = $(this).find('.todo-date').data('created-at') || new Date().toISOString();
            todos.push({ title: title, text: text, archived: true, createdAt: createdAt });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Функція для завантаження заміток з localStorage (без змін)
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodoToDOM(todo.title, todo.text, todo.archived, todo.createdAt);
        });
    }

    // ********** Логіка для темної/світлої теми **********

    // Функція для встановлення теми
    function setTheme(theme) {
        if (theme === 'light') {
            $('body').addClass('light-theme');
            $('#theme-toggle i').removeClass('fa-sun').addClass('fa-moon'); // Змінюємо іконку на місяць
        } else {
            $('body').removeClass('light-theme');
            $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun'); // Змінюємо іконку на сонце
        }
        localStorage.setItem('theme', theme); // Зберігаємо вибір користувача
    }

    // Перевіряємо збережену тему при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Якщо тема не збережена, встановлюємо темну як за замовчуванням
        setTheme('dark');
    }

    // Обробник кліку на перемикачі теми
    $('#theme-toggle').on('click', function() {
        if ($('body').hasClass('light-theme')) {
            setTheme('dark'); // Перемикаємо на темну
        } else {
            setTheme('light'); // Перемикаємо на світлу
        }
    });

    // ********** Кінець логіки теми **********


    // Завантажуємо замітки при завантаженні сторінки
    loadTodos();

    // Обробник відправки форми для додавання нової замітки (без змін)
    $('#todo-form').submit(function(event) {
        event.preventDefault();

        const title = $('#todo-title-input').val().trim();
        const text = $('#todo-input').val().trim();

        if (title !== '' || text !== '') {
            const now = new Date().toISOString();
            addTodoToDOM(title, text, false, now);
            $('#todo-title-input').val('');
            $('#todo-input').val('');
            saveTodos();
        } else {
            alert('Будь ласка, введіть заголовок або текст замітки.');
        }
    });

    // --- Обробники кліків для динамічних елементів (зміни внесені тут) ---

    // Обробник кліку для кнопок видалення (в обох списках)
    $('body').on('click', '.delete-btn', function() {
        // Додаємо підтвердження за допомогою confirm()
        if (confirm('Ви впевнені, що хочете видалити цю замітку?')) {
            const listItem = $(this).closest('li');
            listItem.fadeOut("slow", function() {
                $(this).remove();
                saveTodos();
            });
        }
    });

    // Обробник кліку для кнопок архівування
    $('body').on('click', '.archive-btn', function() {
        // Додаємо підтвердження за допомогою confirm()
        if (confirm('Ви впевнені, що хочете архівувати цю замітку?')) {
            const listItem = $(this).closest('li');
            const title = listItem.find('.todo-title').text();
            const text = listItem.find('.todo-text').text();
            const createdAt = listItem.find('.todo-date').data('created-at');

            listItem.fadeOut("slow", function() {
                $(this).remove();
                addTodoToDOM(title, text, true, createdAt);
                saveTodos();
            });
        }
    });

    // Обробник кліку для кнопок розархівування
    $('body').on('click', '.unarchive-btn', function() {
        // Додаємо підтвердження за допомогою confirm()
        if (confirm('Ви впевнені, що хочете розархівувати цю замітку?')) {
            const listItem = $(this).closest('li');
            const title = listItem.find('.todo-title').text();
            const text = listItem.find('.todo-text').text();
            const createdAt = listItem.find('.todo-date').data('created-at');

            listItem.fadeOut("slow", function() {
                $(this).remove();
                addTodoToDOM(title, text, false, createdAt);
                saveTodos();
            });
        }
    });

    // --- Логіка редагування нотаток (без змін) ---

    $('body').on('click', '.todo-item:not(.editing) .todo-title, .todo-item:not(.editing) .todo-text', function(event) {
        const clickedSpan = $(this);
        const listItem = clickedSpan.closest('.todo-item');

        if (listItem.length && !listItem.hasClass('editing')) {
            toggleEditMode(listItem, clickedSpan);
        }
    });

    function toggleEditMode(listItem, clickedSpan) {
        if (listItem.hasClass('editing')) {
            return;
        }

        listItem.addClass('editing');

        const isTitle = clickedSpan.hasClass('todo-title');
        const currentText = clickedSpan.text();

        let inputField;
        if (isTitle) {
            inputField = $('<input type="text">')
                .val(currentText)
                .addClass('edit-input title-edit');
        } else {
            inputField = $('<textarea>')
                .val(currentText)
                .addClass('edit-input text-edit');
        }

        clickedSpan.hide().after(inputField);
        inputField.focus();
        inputField[0].setSelectionRange(0, inputField[0].value.length);

        inputField.on('blur', function() {
            saveEdit($(this), listItem, isTitle);
        }).on('keypress', function(e) {
            if (e.which === 13 && isTitle) {
                e.preventDefault();
                $(this).blur();
            }
        });
    }

    function saveEdit(inputField, listItem, isTitle) {
        const newText = inputField.val().trim();
        const targetSpan = isTitle ? listItem.find('.todo-title') : listItem.find('.todo-text');

        targetSpan.text(newText).show();
        inputField.remove();

        listItem.removeClass('editing');

        saveTodos();
    }
});

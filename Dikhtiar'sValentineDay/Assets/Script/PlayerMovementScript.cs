using System.Collections;
using System.Collections.Generic;
using UnityEngine;

  public class PlayerMovementScript : MonoBehaviour
{
    public float moveSpeed = 5f; // Швидкість руху персонажа
    private float moveInput; // Вхід для руху

    // Оновлення раз на кадр
    void Update()
    {
        // Отримуємо ввід користувача (стрілки або A/D)
        moveInput = Input.GetAxisRaw("Horizontal");

        // Рухаємо персонажа
        transform.Translate(Vector2.right * moveInput * moveSpeed * Time.deltaTime);
    }
}
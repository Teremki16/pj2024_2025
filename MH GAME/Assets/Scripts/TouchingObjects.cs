using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TouchingObjects : MonoBehaviour
{
    int health = 5;
    Transform Spawn;
    Rigidbody2D rb;
    [SerializeField] Slider hpSlider;
    [SerializeField] Image fillArea;
    private void Awake()
    {
        Spawn = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int value)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = Spawn.position;
        health -= value;
        hpSlider.value = health;
        if (health < 5)
        {
            fillArea.color = Color.yellow;
        }
        else if (health < 3)
        {
            fillArea.color = Color.green;
        }
        else
        {
            fillArea.color = Color.cyan;
        }
        if(health <= 0)
        {
            Debug.Log("YA YA NA MOSKVUUUUUUUU");
            FindObjectOfType<PlayerLaunch>().isStarted = false;
            FindObjectOfType<ResultController>().StopWatch();
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Damage(collision.gameObject.GetComponent<ObstacelsSetting>().damageValue);
        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log("Я можу ліпше)");
            FindObjectOfType<ResultController>().StopWatch();
        }
    }
}

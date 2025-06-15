using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TouchingObjects : MonoBehaviour
{
    int health = 5;
    Transform spawnPoint;
    Rigidbody2D rb;
    [SerializeField] Slider hpSlider;
    [SerializeField] Image fillArea;

    private void Awake()
    {
        spawnPoint = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int value)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = spawnPoint.position;
        health -= value;
        hpSlider.value = health;
        if(health > 3)
        {
            fillArea.color = Color.yellow;
        }
        else if(health > 2)
        {
            fillArea.color = Color.green;
        }
        else
        {
            fillArea.color = Color.cyan;
        }
        if(health <= 0)
        {
            GameObject.Find("Canvas").GetComponent<ResultController>().LoseResult();
            FindAnyObjectByType<PlayerLaunch>().isStarted = false;
            FindAnyObjectByType<ResultController>().StopWatch();
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Damage(collision.gameObject.GetComponent<ObsstacleSetting>()
                .damageValue);

        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log("Вітаю ти лузер!");
            FindAnyObjectByType<ResultController>().SaveResult();
        }
        if (collision.gameObject.tag == "AntiGravity") Physics2D.gravity = new Vector2(0, 10);
        if (collision.gameObject.CompareTag("healthKit") && health < 5)
        {
            Destroy(collision.gameObject);
            health++;
            hpSlider.value = health;
        }
        if(collision.gameObject.CompareTag("timeBonus"))
        {
            Destroy(collision.gameObject);
        }

    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "AntiGravity") Physics2D.gravity = new Vector2(0, -10);
    }
}

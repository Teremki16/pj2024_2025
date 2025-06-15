using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ToocingObjects : MonoBehaviour
{
    int health = 3;
    Transform spawnPoint;
    Rigidbody2D rb;
    [SerializeField] Slider hpSlider;
    [SerializeField] Image fillArea;


    private void Awake()
    {
        spawnPoint = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int VALUE)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = spawnPoint.position;
        health -= VALUE;
        hpSlider.value = health;
        if(health < 3)
        {
            fillArea.color = Color.yellow;
        }
        else if(health < 2)
        {
            fillArea.color = Color.green;
        }
        else
        {
            fillArea.color = Color.cyan;
        }
        if(health <= 0)
        {
            GameObject.Find("Canvas").GetComponent<ResultControler>().LoseResult(); 
            FindAnyObjectByType<PlayerLaunch>().isStarted = false;
            FindAnyObjectByType<ResultControler >().StopWatch();

        }    
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Damage(collision.gameObject.GetComponent<ObstaclesSettings>()
                .damageValue);
        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log("Вітаю ти пройшов це рівень :)");
            FindAnyObjectByType<ResultControler>().SaveResult();
        }
        if (collision.gameObject.tag == "AntiGravity") Physics2D.gravity = new Vector2(0, -10);
        if (collision.gameObject.CompareTag("healthKit") && health < 3)
                {
            Destroy(collision.gameObject);
            health++;
            hpSlider.value = health;
                }
        if(collision.gameObject.CompareTag("timeBonus"))
        {
            Destroy(collision.gameObject);
            if(FindObjectOfType<ResultControler>().currentLevelTime < 5)
            {
                FindObjectOfType<ResultControler>().currentLevelTime = 0;
            }    
            else
            {
                FindObjectOfType<ResultControler>().currentLevelTime -= 5;
            }
        }

    }    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "AntiGravity") Physics2D.gravity = new Vector2(0, 10);
    }
}







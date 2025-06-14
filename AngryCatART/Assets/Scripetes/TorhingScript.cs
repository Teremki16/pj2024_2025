using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TorhingScript : MonoBehaviour
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
        if(health < 5)
        {
            fillArea.color = Color.yellow;
        }
        if(health <= 0)
        {


            GameObject.Find("Canvas").GetComponent<ResultControler>().loseeResult();
            FindAnyObjectByType<PlayerMove>().isStarted = false;
            FindAnyObjectByType<ResultControler>().StopWatch();
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles"))
        {
            Damage(collision.gameObject.GetComponent<ObstacleScript>().damageValue);
        }
        if (collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log(" стейсі не позове тебе на амереканскую тусовку");
            FindAnyObjectByType<ResultControler>().SaveResult();
        }
        if (collision.gameObject.tag == "antiGravity") Physics2D.gravity = new Vector2(0, 10);
        if (collision.gameObject.CompareTag("medkit") && health < 5)
        {
            Destroy(collision.gameObject);
            health++;
            hpSlider.value = health;
        }
        if (collision.gameObject.CompareTag("TimeBonus"))
        {
            Destroy(collision.gameObject);
            if (FindAnyObjectByType<ResultControler>().currentLevelTime < 5)
            {
                FindAnyObjectByType<ResultControler>().currentLevelTime = 0;
            }
            else
            {
                FindAnyObjectByType<ResultControler>().currentLevelTime -= 5;

            }

        }
 
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "antiGravity") Physics2D.gravity = new Vector2(0, -10);
        
    }

}
